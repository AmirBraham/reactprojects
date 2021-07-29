const Pool = require("pg").Pool
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    ssl: true
})
module.exports = pool