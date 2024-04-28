// server.js - Server management for Legends of Lunaria

import http from 'http';
import WebSocket from 'ws';

// Server configuration
const serverPort = 8080;
const serverHost = 'localhost';

// Create HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Legends of Lunaria Server is running');
});

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });

// Function to broadcast messages to all connected clients
function broadcast(data) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

// Handling WebSocket connections
wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log('Received: %s', message);
        // Here you can handle incoming messages and possibly react to them
        // For example, updating player data, handling game actions, etc.
    });

    ws.on('close', () => {
        console.log('Client has disconnected');
    });
});

// Function to connect to the server
export function connectToServer() {
    console.log("Connecting to Legends of Lunaria server...");
    // This function would be used to establish connection from the client side
}

// Start the server
server.listen(serverPort, serverHost, () => {
    console.log(`Server running at http://${serverHost}:${serverPort}/`);
});
