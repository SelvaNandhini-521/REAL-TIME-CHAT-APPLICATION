const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

let messages = [];

wss.on('connection', function connection(ws) {
  ws.send(JSON.stringify({ type: 'history', messages }));

  ws.on('message', function incoming(message) {
    const data = JSON.parse(message);
    if (data.type === 'message') {
      messages.push(data);
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }
  });
});

console.log("WebSocket server running at ws://localhost:3001");
