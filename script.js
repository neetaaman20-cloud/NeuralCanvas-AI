const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
const previewCanvas = document.getElementById('previewCanvas');
const pCtx = previewCanvas.getContext('2d');

const clearBtn = document.getElementById('clearBtn');
const predictBtn = document.getElementById('predictBtn');
const statusText = document.getElementById('status');

let isDrawing = false;

// Drawing Setup
ctx.strokeStyle = "white";
ctx.lineWidth = 16;
ctx.lineCap = "round";
ctx.lineJoin = "round";

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    draw(e);
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pCtx.clearRect(0, 0, 28, 28);
    statusText.innerText = "Ready";
});

predictBtn.addEventListener('click', () => {
    // 1. Process the image (Downscale to 28x28)
    pCtx.fillStyle = "black";
    pCtx.fillRect(0, 0, 28, 28);
    pCtx.drawImage(canvas, 0, 0, 280, 280, 0, 0, 28, 28);

    // 2. Extract pixel data for Console
    const imgData = pCtx.getImageData(0, 0, 28, 28);
    console.log("Captured 28x28 Pixel Data:", imgData.data);
    
    statusText.innerText = "Data Captured!";
    alert("Pixel data sent to Console! Right-click > Inspect > Console to see it.");
});