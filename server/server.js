const express = require("express")
const app = express();
const http = require("http")
const port =  4000;
app.set("port", port);
let server = http.createServer(app);
server.listen(port);
let peerExpress = require("express");
let peerApp = peerExpress();
let peerServer = require("http").createServer(peerApp);
let peerPort = 9000;
peerServer.listen(peerPort);
let ExpressPeerServer = require("peer").ExpressPeerServer(peerServer, {
  debug: true,
});

app.use("/signaling", ExpressPeerServer);

ExpressPeerServer.on("connection", (client) => { });

ExpressPeerServer.on("disconnect", (client) => { });
server.on("error", () => {
    console.log("error")
});
server.on("listening", () => {
    console.log("listening")
});
