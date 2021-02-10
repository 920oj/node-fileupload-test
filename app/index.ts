import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

const port = process.env.PORT || 3000;

const imageRouter = require('./routes/image');

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/image', imageRouter);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
