const http = require('http');
const fs = require('fs');
const path = require('path');

// --- Callback-based function ---
function riskyOperationCallback(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, "Operation successful!");
    } else {
      callback("Operation failed!");
    }
  }, 1000);
}

// --- Promise-based function ---
function riskyOperationPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow CORS
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/callback') {
    riskyOperationCallback((error, result) => {
      if (error) {
        res.writeHead(500);
        res.end(JSON.stringify({ message: error }));
      } else {
        res.writeHead(200);
        res.end(JSON.stringify({ message: result }));
      }
    });
  } else if (req.url === '/promise') {
    try {
      const result = await riskyOperationPromise();
      res.writeHead(200);
      res.end(JSON.stringify({ message: result }));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 