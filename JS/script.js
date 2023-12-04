let interactionCount = 0;

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    updateInteractionCounter();
}

function handleColorInput() {
    const colorInput = document.getElementById('colorInput');
    const userInputColor = colorInput.value.trim().toLowerCase();

    if (isValidColor(userInputColor)) {
        document.body.style.backgroundColor = userInputColor;
        updateInteractionCounter();
    } else {
        alert('Invalid color name. Please try again.');
    }
    colorInput.value = '';
}


function updateInteractionCounter() {
    interactionCount++;
    const counterElement = document.getElementById('interactionCounter');
    counterElement.textContent = `Interactions: ${interactionCount}`;
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}


document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);
document.getElementById('colorInput').addEventListener('change', handleColorInput);


window.addEventListener('scroll', function() {
    
    changeBackgroundColor();
});
