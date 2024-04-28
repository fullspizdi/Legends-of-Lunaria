// network.js - Network management for Legends of Lunaria

import WebSocket from 'ws';

// Function to setup network communication
export function setupNetwork() {
    console.log("Setting up network communications...");

    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:8080');

    // Handle open connection
    ws.on('open', function open() {
        console.log('Connected to the server via WebSocket.');
        // Send a message to the server when the connection is opened
        ws.send('Hello Server, client connected!');
    });

    // Handle incoming messages from the server
    ws.on('message', function incoming(data) {
        console.log('Received from server:', data);
        // Here you can handle data received from the server
        processServerMessage(data);
    });

    // Handle errors
    ws.on('error', function error(error) {
        console.error('WebSocket error:', error);
    });

    // Handle WebSocket closure
    ws.on('close', function close() {
        console.log('Disconnected from the server.');
    });
}

// Function to process messages received from the server
function processServerMessage(message) {
    try {
        const data = JSON.parse(message);
        console.log('Processing server message:', data);
        // Depending on the type of message, different actions can be taken
        switch (data.type) {
            case 'update':
                // Handle updates (e.g., player positions, game state changes)
                handleUpdate(data.content);
                break;
            case 'chat':
                // Handle chat messages
                handleChat(data.content);
                break;
            case 'notification':
                // Handle notifications (e.g., achievements, system messages)
                handleNotification(data.content);
                break;
            default:
                console.log('Unknown message type:', data.type);
        }
    } catch (error) {
        console.error('Error processing server message:', error);
    }
}

// Example handlers for different types of messages
function handleUpdate(update) {
    console.log('Update received:', update);
    // Update game state or player positions
}

function handleChat(chatMessage) {
    console.log('Chat message received:', chatMessage);
    // Display chat message in the game
}

function handleNotification(notification) {
    console.log('Notification received:', notification);
    // Show notification in the game
}
