const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Serve the modernized UI static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API status endpoint
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', service: 'aethel-agent' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Aethel agent server running on port ${PORT}`);
});
