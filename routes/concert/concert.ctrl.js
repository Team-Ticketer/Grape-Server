const axios = require('axios');
const Concert = require('../../models/Concert');

const postConcert = async function postConcert(req, res) {
  const {
    contract, name, artist, content, video, address,
    lat, lng, startDate, endDate, ownerName, ownerEmail, ownerDes, tickets,
  } = req.body;

  const place = (await axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
    params: {
      key: process.env.GMP_KEY,
      input: address,
      inputtype: 'textquery',
      language: 'ko',
      fields: 'name',
    },
  })).data;
  console.log(address);
  const newConcert = new Concert({
    contract,
    name,
    placeName: place.candidates ? place.candidates[0].name : null,
    artist,
    content,
    video,
    picture: `${req.protocol}://${req.hostname}/public/uploads/${req.files[0].filename}`,
    address,
    lat,
    lng,
    startDate,
    endDate,
    owner: {
      name: ownerName,
      email: ownerEmail,
      description: ownerDes,
    },
    tickets: JSON.parse(tickets),
  });

  newConcert.save()
    .then(() => res.status(201).json({ result: 'OK' }))
    .catch((e) => {
      console.log(e);
      res.status(500).json({ result: 'BAD' });
    });
};

const getConcertList = async function getConcertList(req, res) {
  const query = {};
  for (let k in req.query) query[k] = new RegExp(req.query[k], 'i');
  // lte and gte 사용해서 $date 비교하기
  console.log(query);
  const concerts = await Concert.find(query, 'picture name startDate endDate minPrice maxPrice');
  res.status(200).json(concerts);
};

const getConcertDetail = async function getConcertDetail(req, res) {
  const { id } = req.params;
  const concert = await Concert.findById(id);
  res.status(200).json(concert);
};

module.exports = {
  postConcert,
  getConcertList,
  getConcertDetail,
};
