import { Sequelize } from "sequelize";
import config from "./config/config";

let sequelize;
let dev_config = config;
sequelize = new Sequelize(
  dev_config.database,
  dev_config.username,
  dev_config.password,
  {
    host: dev_config.host,
    timezone: dev_config.timezone,
    dialect: dev_config.dialect,
    dialectOptions: dev_config.dialectOptions,
  }
);

const connection = sequelize;

export default connection;
