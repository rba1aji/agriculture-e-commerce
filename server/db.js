const Pool = require('pg').Pool

const pool = new Pool({
    user: 'user3',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'agriecom'
});

module.exports = pool;  
