const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let lineStyle = 'solid';
let startX;
let startY;
let drawingActions = [];
let currentStep = -1;

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;

    // Save the current canvas state before drawing
    ctx.save();
});

canvas.addEventListener('mouseup', e => {
    if (isPainting) {
        isPainting = false;

        // Restore the canvas state to the previous state (before the current drawing)
        ctx.restore();

        // Save the current canvas state (now with the drawing)
        ctx.save();

        // Save the drawing action to the actions array
        const drawingData = canvas.toDataURL();
        drawingActions.push(drawingData);
        currentStep = drawingActions.length - 1;
    }
    ctx.beginPath();
});

const undo = () => {
    if (currentStep > 0) {
        currentStep--;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Load the previous drawing state from the actions array
        const img = new Image();
        img.src = drawingActions[currentStep];
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }
}

const redo = () => {
    if (currentStep < drawingActions.length - 1) {
        currentStep++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Load the next drawing state from the actions array
        const img = new Image();
        img.src = drawingActions[currentStep];
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
        };
    }
}

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clearAll') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawingActions.length = 0; // Clear the drawing actions array
        currentStep = -1;
    }
    else if (e.target.id === 'undo') {
        undo();
    }
    else if (e.target.id === 'redo') {
        redo();
    }
});

toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }
    else if (e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
        ctx.lineWidth = lineWidth;
    }
    else if (e.target.id === 'lineStyle') {
        lineStyle = e.target.value;
        updateLineStyle();
    }
});

const updateLineStyle = () => {
    ctx.setLineDash([]);
    if (lineStyle === 'dotted') {
        ctx.setLineDash([2, 2]);
    } else if (lineStyle === 'dashed') {
        ctx.setLineDash([10, 5]);
    }
}

const draw = (e) => {
    if (!isPainting) {
        return;
    }

    ctx.lineCap = 'round';

    const mouseX = e.clientX - canvasOffsetX;
    const mouseY = e.clientY - canvasOffsetY;

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', draw);

const saveButton = document.getElementById('save');

saveButton.addEventListener('click', () => {
    console.log('CLICKED MF');
    const imageDataUrl = canvas.toDataURL(); 
    const promptId = 69;

    fetch('/api/saveImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageDataUrl, promptId  }),
    })
    .then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        console.log('Image saved on the server!');
        window.location.href= '/';
    })
    .catch(error => console.error('Error:', error));
});
updateLineStyle();