import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = 8080;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.status(200).send("hello")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
