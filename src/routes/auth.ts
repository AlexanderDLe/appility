import { Router, Request, Response } from 'express';

const router = Router();

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

router.get('/', (req: Request, res: Response) => {
    res.send('hi there');
});

router.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    if (email && password) {
        res.send(email + password);
    }
});

export { router };
