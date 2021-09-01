const { Pool } = require("pg");

// const devConfig = {
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   password: process.env.PGPASSWORD,
//   databse: process.env.PGDATABASE,
//   port: process.env.PGPORT,
// };

const devConfig = `postgressql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
