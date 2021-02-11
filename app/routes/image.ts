import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import S3 from 'aws-sdk/clients/s3';

const router = express.Router();

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'ap-northeast-1',
});

const s3ImgUpload = multer({
  storage: multerS3({
    s3,
    bucket: 'oj-upload-test',
    metadata: (req, file, cb) => {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + file.originalname);
    },
  }),
});

router.post('/', s3ImgUpload.single('photo'), (req, res) => {
  console.log('受け取りました');
  console.log(req.file);
  res.status(200).send(req.file).end();
});

module.exports = router;
