const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: '192.168.44.71',
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