import express, { Express, RequestHandler } from 'express';
import router from './routes'

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (req:any, res:any) => res.json({ ok: true }));
    this.routes();
  }

  private config(): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  private routes(): void {
    this.app.use(router);
  }
}

export { App };
