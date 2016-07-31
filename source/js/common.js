document.write("header");

let modName = location.pathname.slice(1);

console.log(modName);
let route = require("./routes/"+modName);
route();



//document.getElementById("login").onclick = function(e){
//    console.log("click",e);
//
//    require.ensure([],function(require){
//        let login = require("./login");
//
//        login();
//    },'auth')
//}
//
//document.getElementById("logout").onclick = function(e){
//    console.log("click",e);
//
//    require.ensure([],function(require){
//        let logout = require("./logout");
//
//        logout();
//    },'auth')
//}
