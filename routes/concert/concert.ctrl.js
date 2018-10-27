const axios = require('axios');
const Concert = require('../../models/Concert');

const postConcert = async function postConcert(req, res) {
  const {
    contract, artist, content, video, address, lat, lng, term, ownerName, price,
  } = req.body;

  // TODO: address로 place api 요청 보내기
  const place = await axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
    params: {
      key: process.env.GMP_KEY,
      input: address,
      inputtype: 'textquery',
      language: 'ko',
      fields: 'name',
    },
  });
  console.log(place);
  const newConcert = new Concert({
    contract,
    name: place.name,
    artist,
    content,
    video,
    picture: `${req.protocol}://${req.hostname}/${req.files.picture[0].path}`,
    address,
    lat,
    lng,
    term,
    ownerName,
    price,
  });

  newConcert.save()
    .then(() => res.status(201).json({ result: 'OK' }))
    .catch(() => res.status(500).json({ result: '' }));
};

const getConcertList = async function getConcertList(req, res) {
  const concerts = await Concert.find({}, 'picture name startDate endDate minPrice maxPrice');
  res.status(200).json(concerts);
};

const getConcertDetail = async function getConcertDetail(req, res) {
  const { id } = req.params;
  const concert = await Concert.findById(id);
  res.status(200).json(concert);
};

exports = {
  postConcert,
  getConcertList,
  getConcertDetail,
};
