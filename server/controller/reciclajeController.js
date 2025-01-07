let locations = []; // Array para almacenar las ubicaciones

exports.getLocations = (req, res) => {
    res.json(locations);
};

exports.addLocation = (req, res) => {
    const { lat, lng, description } = req.body;
    locations.push({ lat: parseFloat(lat), lng: parseFloat(lng), description });
    res.json({ message: 'Ubicación agregada con éxito.' });
};


Latitud: 10.595833
Longitud: -71.618611