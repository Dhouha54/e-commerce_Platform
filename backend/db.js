const { createPool } = require('mysql')

const pool = createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'dhouha',
    password        : 'ecommerce123',
    database        : 'e_commerce_website'
})


module.exports = pool;