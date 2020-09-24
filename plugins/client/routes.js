// Routes for bot
var path = require("path");
exports.default = function(server){
    server.route({
        method: 'GET',
        path: '/client/{param*}',
        handler: {
            directory: {
                path: path.join('public')
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/client/addnew',
        handler: {
            function (request, reply) {
                var addRecordQuery = "insert into User content " + JSON.stringify(request.payload);
                console.log(addRecordQuery);
                db.query(addRecordQuery).then(function (result) {
                    console.log("query result received");
                    console.log(result);
                    reply(result);
                });
                console.log("Executed");
            }
        }
    });
}
