const express = require('express');
const path = require("path");
const app = express();
const port = 5000;
const cors = require('cors');

const corsOptions = {
  origin: 'https://meirfriedmann.github.io',
};

app.use(cors(corsOptions));

app.get('/backend', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/image', (req, res) => {
  const imagePath = path.join(__dirname, 'assets', 'profile.webp');
  res.set({
    "Content-Type": "image/webp",
    "Cache-Control": "public, max-age=3600"
  });
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

