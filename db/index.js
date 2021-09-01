const { Pool } = require("pg");

// const devConfig = {
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   password: process.env.PGPASSWORD,
//   databse: process.env.PGDATABASE,
//   port: process.env.PGPORT,
// };

// const proConfig = {
//   connectionString: process.env.DATABASE_URL,
// };

const pool = new Pool({
  // process.env.NODE_ENV === "production" ? proConfig : devConfig,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
