import express from 'express';
import { router as AuthRouter } from './routes/auth';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({ keys: ['randomString'] }));

app.use(AuthRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
