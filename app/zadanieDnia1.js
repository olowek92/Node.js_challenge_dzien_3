const crypto = require("crypto");
const fs = require("fs");

process.argv.forEach((val, index) => {
  if (index > 1) {
    fs.readFile(val, "utf8", (err, data) => {
      if (err === null) {
        console.log(crypto.createHmac("sha256", data).digest("hex"));
      } else {
        console.log("Error: ", err);
      }
    });
  }
});
