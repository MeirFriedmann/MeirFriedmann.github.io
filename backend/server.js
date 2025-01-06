const express = require('express');
const path = require("path");
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, "assets")));

app.get('/backend', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/image', (req, res) => {
  res.set({
    "Content-Type": "image/webp",
    "Cache-Control": "public, max-age=3600"
  });
  res.sendFile('/profile.webp');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

