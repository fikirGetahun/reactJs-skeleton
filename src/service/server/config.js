const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '',
    user: 'root',
    password: '',
    database: 'akkomenu'
})

module.exports = pool.promise()