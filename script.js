function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
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

// Bike dimensions and initial position
const bikeWidth = 50;
const bikeHeight = 100;
let bikeX = canvas.width / 2 - bikeWidth / 2;
let bikeY = canvas.height - 200;

// Bike movement speed
let bikeSpeedX = 0;
let bikeSpeedY = 0;
const bikeSpeed = 5;

function drawBike() {
    ctx.fillStyle = '#ffffff'; // Bike color
    ctx.fillRect(bikeX, bikeY, bikeWidth, bikeHeight);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawBike();
    requestAnimationFrame(update);
}

update();

// Handle keyboard controls
const keys = {};
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function moveBike() {
    if (keys['ArrowRight'] || keys['Right']) {
        bikeSpeedX = bikeSpeed;
    } else if (keys['ArrowLeft'] || keys['Left']) {
        bikeSpeedX = -bikeSpeed;
    } else {
        bikeSpeedX = 0;
    }

    if (keys['ArrowUp'] || keys['Up']) {
        bikeSpeedY = -bikeSpeed;
    } else if (keys['ArrowDown'] || keys['Down']) {
        bikeSpeedY = bikeSpeed;
    } else {
        bikeSpeedY = 0;
    }

    // Update bike position
    bikeX += bikeSpeedX;
    bikeY += bikeSpeedY;

    // Boundary detection (wrap around)
    if (bikeX > canvas.width) {
        bikeX = -bikeWidth;
    } else if (bikeX < -bikeWidth) {
        bikeX = canvas.width;
    }

    if (bikeY > canvas.height) {
        bikeY = -bikeHeight;
    } else if (bikeY < -bikeHeight) {
        bikeY = canvas.height;
    }
}

// Update bike position continuously
setInterval(moveBike, 1000 / 60); // Adjust speed as needed

