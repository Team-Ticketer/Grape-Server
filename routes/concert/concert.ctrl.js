const axios = require('axios');
const mongoose = require('mongoose');
const Concert = require('../../models/Concert');

// FIXME: 느린거 같아요
const postConcert = async function postConcert(req, res) {
  const {
    contract, name, artist, content, video, address,
    startDate, endDate, ownerName, ownerEmail, ownerDes,
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
  const newConcert = new Concert({
    contract,
    name,
    placeName: place.candidates[0] ? place.candidates[0].name : null,
    artist,
    content,
    video,
    picture: `${req.protocol}://${req.hostname}/public/uploads/${req.files[0].filename}`,
    poster: `${req.protocol}://${req.hostname}/public/uploads/${req.files[1].filename}`,
    address,
    startDate,
    endDate,
    owner: {
      name: ownerName,
      email: ownerEmail,
      description: ownerDes,
    },
  });

  newConcert.save()
    .then(() => res.status(201).json({ result: 'OK' }))
    .catch((e) => {
      console.log(e);
      res.status(500).json({ result: 'BAD' });
    });
};

// FIXME: 쿼리 잘 되는지 확인하기
const getConcertList = async function getConcertList(req, res) {
  const query = {};

  // FIXME: lte and gte 사용해서 $date 비교하기
  Object.keys(req.query).forEach((k) => {
    query[k] = new RegExp(req.query[k], 'i');
  });

  const concerts = await Concert.find(query, 'poster name startDate endDate');
  res.status(200).json(concerts);
};

const getConcertDetail = async function getConcertDetail(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(405).json({ result: 'BAD', msg: 'Invalid id' });
  try {
    const concert = await Concert.findById(id, '-poster');
    if (!concert) return res.status(404).json({ result: 'BAD', msg: 'Not Found' });
    return res.status(200).json(concert);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ result: 'BAD' });
  }
};

module.exports = {
  postConcert,
  getConcertList,
  getConcertDetail,
};
