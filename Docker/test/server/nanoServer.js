var http = require('http');
var fs = require('fs');
var path = require('path');

function getDefaults() {
    return {
        port: 8080,
        path: "./",
        bindIp: "0.0.0.0"
    };
}

function getExtension(fileName) {
    const extensionPart = String(path.extname(fileName)).toLowerCase();
    const extension = extensionPart.split("?")[0];
    return extension;
}



function getPureFilePath(fileName) {
    const fileNameParsed = path.parse(fileName);
    const extension = fileNameParsed.ext ? fileNameParsed.ext.split("?")[0] : "";
    return pathJoin(fileNameParsed.dir, fileNameParsed.name) + extension;
}



function getContentType(extension) {

    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript; charset=UTF-8',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml',
        ".dll": "application/octet-stream"
    };

    var contentType = mimeTypes[extension] || 'text/plain';
    return contentType;
}

function pathJoin(path1, path2) {
    const secondSlash = path2.startsWith("/"), firstSlash = path1.endsWith("/");
    if (firstSlash && secondSlash) {
        return path1 + path2.substring(1);
    } else if (!firstSlash && !secondSlash) {
        return path1 + "/" + path2;
    } else {
        return path1 + path2;
    }
}

function getArgumentDict() {
    const args = process.argv.slice(2);
    const valuelessKeys = new Set(["h"]);
    const retVal = {};
    let curKey = null;

    for (var i = 0; i < args.length; i++) {
        if (args[i].startsWith("-")) {
            curKey = args[i].slice(1);
            if (valuelessKeys.has(curKey)) {
                retVal[curKey] = true;
                curKey = null;
            }
            continue;
        }
        if (curKey) {
            retVal[curKey] = args[i];
            curKey = null;
            continue;
        }
    }
    return retVal;
}

function getDynamicRequestHandler(url){
    const dynamicHandlers = {
        "/env": (response) => {
            const content = `{"env": "${argDict.env}"}`;
            response.writeHead(200, { 'Content-Type': "application/json", "Content-Length": content.length });
            response.end(content, 'utf-8');
        }
    }
    const cb = dynamicHandlers[url];
    return cb;
}

const argDict = getArgumentDict();
const defaults = getDefaults();

if (argDict.h) {
    console.log(`usage:
        -p   <port>
        -r   <rootPath>
        -env <prod | ...(dev)>
        -ip  <ip to bind>
    `);
    return;
}

const options = {
    port: argDict.p || defaults.port,
    rootPath: argDict.r || defaults.path,
    bindIp: argDict.ip || defaults.bindIp
}

var server = http.createServer(function(request, response) {
    console.log('requested ', request.url);

    let fileName = request.url;
    if (fileName == '/') {
        fileName = 'index.html';
    }

    const pureFilePath = getPureFilePath(fileName);
    const handler = getDynamicRequestHandler(pureFilePath);
    if (handler){
        console.log(`request being handled by dynamic handler ${pureFilePath}`);
        handler(response);
        return;
    }

    const extension = getExtension(fileName);
    const contentType = getContentType(extension);
    
    let filePath = pathJoin(options.rootPath, pureFilePath);
    filePath = filePath;

    console.log(`file: ${filePath} contentType: ${contentType} for ext: ${extension}`);


    fs.readFile(filePath, function(error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    if (error){
                        content = "";
                    }
                    response.writeHead(404, { 'Content-Type': contentType, "Content-Length": content.length });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType, "Content-Length": content.length });
            response.end(content, 'utf-8');
        }
    });

}).listen(options.port, options.bindIp);

console.log(`Server running at http://${options.bindIp}:${options.port}/ for path ${options.rootPath}`);
