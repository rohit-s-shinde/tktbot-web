var OrientDB = require('orientjs');
var dbServer = OrientDB({
    host: '192.168.43.196',
    port: 2424,
    username: 'root',
    password: 'root'
});
var db = dbServer.use({
    name: 'TKTNET',
    username: 'root',
    password: 'root'
});

module.exports = db;