const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: '200.0.1.155',
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