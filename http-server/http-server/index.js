const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const server = http.createServer();

//Bind an event named "request" to the server
server.on('request', function(req, resp){
    let fpath = req.url;
    
    if(fpath === '/'){
        fpath = path.join(__dirname, "../div-page/index.html");
    } else{
        fpath = path.join(__dirname, "../div-page" + fpath);
    }
    if(!fs.existsSync(fpath)){
        fpath = path.join(__dirname, "../div-page/error.html");
    }

    resp.setHeader("Content-Type", mime.getType(fpath) + ";charset=UTF-8");
    console.log(fpath, mime.getType(fpath));
    const data = fs.readFileSync(fpath, "utf-8");
    resp.end(data);
})

server.listen(3000, function(){
    console.log('server running at http://127.0.0.1:3000');
})