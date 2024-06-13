/**
 * app.js file is run when we start the background
 */

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
require('dotenv').config();

var cors = require("cors");
app.use(cors());
// app.use(bodyParser.json());
app.use(express.static(__dirname + "/uploads/"));
app.use(
  express.json({
    limit: "50mb",
  })
);
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

var server = app.listen(13000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening on http://%s:%s", host, port);
});
const socket = require("socket.io")(server, {
  cors: {
    origin: process.env.ANGULARURL,
  },
});
/**
 * const variable of different routes
 */
const UserRoutes = require("./routes/user.routes");
const DepartmentRoutes = require("./routes/department.routes");
const SearchRoutes = require("./routes/search.routes");
const TaskRoutes = require("./routes/task.routes");


app.use("/user", UserRoutes);
app.use("/department", DepartmentRoutes);
app.use("/search", SearchRoutes);
app.use("/task", TaskRoutes);

module.exports.notification = function (type, data) {
  socket.emit(type, data);
};