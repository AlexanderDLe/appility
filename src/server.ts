import express from 'express';
import { router as authRoutes } from './routes/authRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieSession({ keys: ['fff'] }));
app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
