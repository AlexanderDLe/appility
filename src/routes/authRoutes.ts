import { Router, Request, Response } from 'express';

const router = Router();

interface LoginRequest extends Request {
    body: {
        email: string;
        password: string;
    };
}

router.get('/login', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <h1>Login</h1>
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
        </div>
    `);
});

router.post('/login', (req: LoginRequest, res: Response) => {
    const { email, password } = req.body;
    if (email && password && email === 'asdf' && password === 'asdf') {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.status(403).send('Invalid email or password.');
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h1>Log Out</h1>
                <a href="/logout">Log Out</a>
            </div>
        `);
    } else {
        res.send(`
            <div>
                <h1>Log In</h1>
                <a href="/login">Log In</a>
            </div>
        `);
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

export { router };
