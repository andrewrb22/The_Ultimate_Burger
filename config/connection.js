// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazon",
        user: "y6loofdfnbbu5rkr",
        password: "d5c83a0pe2dnjk2m",
        database: "ih9dozfxfduizdfv"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;