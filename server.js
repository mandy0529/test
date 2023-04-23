const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

const port = 8000; //인스턴스 생성시 만들었던 포트번호 기입

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.use(express.static(path.join(__dirname, "/client/dist")));

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
