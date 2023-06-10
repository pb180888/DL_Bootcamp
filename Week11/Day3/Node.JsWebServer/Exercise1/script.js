const json = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" },
      ],
    },
  },
};
const http = require("http");
const server = http.createServer((req, res) => {
  //check the URL of the current request
  if (req.url == "/") {
    // appropriate Content-Type header for an HTML response:
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>Welcome new user</p></body></html>");
    res.end(JSON.stringify(json));
  } else {
    res.end("<html><body><p>Another page</p></body></html>");
  }
});
server.listen(5000);
console.log("Node.js web server at port 5000 is running..");
