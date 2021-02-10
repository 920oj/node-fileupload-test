import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({
  dest: './uploads/',
});

router.post('/', upload.single('photo'), (req, res) => {
  console.log('受け取りました');
  res.status(204).end();
});

module.exports = router;
