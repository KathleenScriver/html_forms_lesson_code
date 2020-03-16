window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/cars')
        .then(response => response.json())
        .then(console.log)
})