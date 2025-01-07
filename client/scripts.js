const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

async function loadLocations() {
    const response = await fetch('http://localhost:3000/reciclaje/locations'); 
    const locations = await response.json();
    locations.forEach(({ lat, lng, description }) => {
        L.marker([lat, lng]).addTo(map).bindPopup(description);
    });
}

document.getElementById('location-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);

    const response = await fetch('http://localhost:3000/reciclaje/locations', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat: latitude, lng: longitude, description })
    });

    if (response.ok) {
        alert('Ubicación agregada con éxito.');
        loadLocations();
    }
});

loadLocations();
