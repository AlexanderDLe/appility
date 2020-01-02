import express, { Request, Response } from 'express';
import { router as AuthRouter } from './routes/auth';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(AuthRouter);

app.listen(3000, () => console.log('Listening on port 3000'));
