const { spawn, execFile } = require("child_process");
function runCommand(command, params) {
  const spawnObj = spawn(command, params);
  spawnObj.stdout.on("data", (data) => {
    logger.info(`${command}${params}--->stdout:` + data);
  });
  spawnObj.stderr.on("data", (data) => {
    logger.error(`${command}${params}--->stderr:` + data);
    throw new Error("推送失败");
  });
}
execFile(gitShellPath, (error, stdout, stderr) => {
  logger.error("gitPushError:", stderr);
  logger.error("gitPushStdout:", stdout);
  logger.error("Error:", error);
  if (error) {
    throw error;
  }
  if (stdout) {
    console.log("stdout ===> ", stdout);
  }
  if (stderr) {
    console.log("stderr ===> ", stderr);
  }
});
shell.exec(`sudo ${user} git push origin master`, (code, stdout, stderr) => {
  logger.error("gitPushError:", stderr);
  if (stderr) throw new Error("推送出错了");
});
