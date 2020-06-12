require('dotenv/config');

const { DB_PORT, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  entities: ["dist/**/*.entity{.ts,.js}"]
};