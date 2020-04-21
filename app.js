const express = require("express");
const app = express();
const { exec } = require("child_process");

const port = 8000;

app.use(express.static("build"));

app.use(
  (req, res, next) => {
    console.log("111");
    next();
    console.log("111 end");
  },
  (req, res, next) => {
    console.log("111 ppp");
    next();
    console.log("111 ppp end");
  }
);

app.post("/runShell", (req, res, next) => {
  console.log("222");
  // next();
  console.log("222 end");
  res.send({ name: "runShell" });
});

app.use((req, res, next) => {
  console.log("333");
  next();
  console.log("333 end");
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
