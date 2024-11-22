import express, { Express, RequestHandler } from 'express';
import router from './routes'
import { getRouteData } from './utils';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
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

getRouteData("1800 Amphitheatre Parkway, Mountain View, CA 94043", "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132");

export { App };
