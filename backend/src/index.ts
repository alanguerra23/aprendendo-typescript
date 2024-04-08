import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use(routes);
app.use(cors());

app.listen(3333);
