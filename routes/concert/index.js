const router = require('express').Router();
const multer = require('multer');
const ctrl = require('./concert.ctrl');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}${Date.now()}.jpg`);
  },
});
const upload = multer({ storage });

router.post('/', upload.fields([]), ctrl.postConert)
  .get('/', ctrl.getConcertList)
  .get('/:id', ctrl.getConcertDetail);

module.exports = router;
