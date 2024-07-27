function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('chat-message'); // Add class for styling
        chatMessages.appendChild(messageElement);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// WebSocket setup
const socket = new WebSocket('ws://localhost:8080');

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let players = {};
let playerId;

socket.addEventListener('open', function(event) {
    console.log('Connected to WebSocket');
});

socket.addEventListener('message', function(event) {
    const data = JSON.parse(event.data);
    if (data.type === 'init') {
        playerId = data.playerId;
        players = data.players;
    } else if (data.type === 'update') {
        players = data.players;
    }
    drawGame();
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        socket.send(JSON.stringify({ type: 'move', direction: 'up' }));
    } else if (event.key === 'ArrowDown') {
        socket.send(JSON.stringify({ type: 'move', direction: 'down' }));
    } else if (event.key === 'ArrowLeft') {
        socket.send(JSON.stringify({ type: 'move', direction: 'left' }));
    } else if (event.key === 'ArrowRight') {
        socket.send(JSON.stringify({ type: 'move', direction: 'right' }));
    }
});

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const id in players) {
        const player = players[id];
        ctx.fillStyle = id === playerId ? 'blue' : 'red';
        ctx.fillRect(player.x, player.y, 50, 50);
    }
}

