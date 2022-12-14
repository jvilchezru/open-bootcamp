const logger = require("./logger");

function returnError() {
  throw new Error("Esto es un error");
}

try {
  returnError();
} catch (e) {
  logger.error(e.message);
}
