
const commentText = document.getElementById('comment');

function updateCounter() {
    const commentText = document.getElementById('comment');
    const counter = document.getElementById('counter');
    let maxCharacters = 255;
    let remainingCharacters = maxCharacters - commentText.value.length;
    
    if (remainingCharacters <= 0) {
        commentText.value = commentText.value.substring(0, maxCharacters); 
        commentText.disabled = true; 
        counter.textContent = 0;
    } else {
        commentText.disabled = false;
        counter.textContent = remainingCharacters;
    }
}

function comment() {
    const commentText = document.getElementById('comment').value.trim(); 
    if (commentText) {
        const result = document.getElementById('result');
        result.innerHTML = `<strong>Usuario:</strong> ${commentText}`;
    }
}

function printLetter() {
    const commentText = document.getElementById('comment');
    const result = document.getElementById('result');
    commentText.value = commentText.value.toUpperCase();

    result.innerHTML = `<strong>Usuario:</strong> ${commentText.value}`;
}


function smallLetter() {
    const commentText = document.getElementById('comment');
    commentText.value = commentText.value.toLowerCase();

    result.innerHTML = `<strong>Usuario:</strong> ${commentText.value}`;
}

document.getElementById('comment').addEventListener('input', updateCounter);