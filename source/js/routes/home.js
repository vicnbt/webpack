module.exports = function(){
    let textContent = require("./content.js");
    document.write(textContent);

    if(NODE_ENV == "dev"){
        console.log("this is dev");
    }

    exports.textContent = textContent;
}
