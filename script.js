document.getElementById('name').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.5)';
});
document.getElementById('name').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
document.getElementById('title').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.3)';
});
document.getElementById('title').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('adviceButton').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceText').innerText = data.slip.advice;
        })
        .catch(error => console.error('Error:', error));
});

