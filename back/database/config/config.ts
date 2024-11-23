import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'root',
  database: 'shopper',
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

export = config;