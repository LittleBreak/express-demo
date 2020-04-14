const express = require("express");
const app = express();
const { exec } = require("child_process");

const port = 8000;

app.use(express.static("build"));
app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World!");
});
const sdf = exec("mkdir /root/work/test", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

app.post("/runShell", (req, res) => {
  res.send({ name: "runShell" });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
