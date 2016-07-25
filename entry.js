let textContent = require("./content.js");
document.write(textContent);
if(NODE_ENV == "dev"){
    console.log("dev");
}

exports.textContent = textContent;