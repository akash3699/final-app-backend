const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: '13.233.187.155',
        user: 'root',
        password:'root',
        database: 'app_db',
        port: 9099
    })

    connection.connect()

    return connection
}

module.exports = {
    connect: connect
}