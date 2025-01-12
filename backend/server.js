const express = require('express');
const path = require("path");
const helmet = require('helmet');
const app = express();
const port = 5000;
const cors = require('cors');

const corsOptions = {
  origin: 'https://meirfriedmann.github.io',
};

app.use(cors(corsOptions));

app.use(helmet());

// Set to effectively never timeout
app.keepAliveTimeout = 0;        // 0 means no timeout
app.headersTimeout = 0;          // 0 means no timeout
app.timeout = 0;                 // 0 means no timeout

// Add error handling to prevent crashes
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

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

