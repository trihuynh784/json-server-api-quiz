const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Xuất module thay vì chạy trực tiếp
module.exports = server;
