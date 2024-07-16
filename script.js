

// JavaScript for Racing Game

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

// Racing game code
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions based on device screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Bike image and dimensions
const bikeImg = new Image();
bikeImg.src = 'path/to/bike.png'; // Update with the path to your bike image
const bikeWidth = 50;
const bikeHeight = 100;
let bikeX = canvas.width / 2 - bikeWidth / 2;
let bikeY = canvas.height - 200;

// Bike movement speed
let bikeSpeedX = 0;
let bikeSpeedY = 0;
const bikeSpeed = 5;

// Background image
const bgImg = new Image();
bgImg.src = 'path/to/background.png'; // Update with the path to your background image
let bgY = 0;

// Obstacles
const obstacles = [];
const obstacleWidth = 50;
const obstacleHeight = 100;
const obstacleSpeed = 5;
let score = 0;

// Draw the bike
function drawBike() {
    ctx.drawImage(bikeImg, bikeX, bikeY, bikeWidth, bikeHeight);
}

// Draw the background
function drawBackground() {
    ctx.drawImage(bgImg, 0, bgY, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, bgY - canvas.height, canvas.width, canvas.height);
    bgY += obstacleSpeed;
    if (bgY >= canvas.height) {
        bgY = 0;
    }
}

// Draw obstacles
function drawObstacles() {
    obstacles.forEach((obstacle, index) => {
        ctx.fillStyle = 'red';
        ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
        obstacle.y += obstacleSpeed;
        if (obstacle.y > canvas.height) {
            obstacles.splice(index, 1);
            score++;
        }
    });
}

// Check