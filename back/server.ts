import { App } from './app';

const PORT = process.env.APP_PORT || 80;

new App().start(PORT);