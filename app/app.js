const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Travel Explorer 🌍</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          text-align: center;
        }

        header {
          padding: 20px;
          font-size: 28px;
          font-weight: bold;
          background: rgba(0,0,0,0.2);
        }

        .container {
          padding: 40px;
        }

        .card {
          display: inline-block;
          background: white;
          color: black;
          margin: 15px;
          padding: 20px;
          border-radius: 10px;
          width: 200px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: transform 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card h3 {
          margin: 10px 0;
        }

        .btn {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          background: #ff7e5f;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn:hover {
          background: #feb47b;
        }

        footer {
          margin-top: 40px;
          padding: 10px;
          font-size: 14px;
          background: rgba(0,0,0,0.2);
        }
      </style>
    </head>

    <body>
      <header>✈️ Travel Explorer</header>

      <div class="container">
        <h2>Explore Beautiful Destinations</h2>

        <div class="card">
          <h3>🏝️ Bali</h3>
          <p>Beaches & Resorts</p>
        </div>

        <div class="card">
          <h3>🏔️ Switzerland</h3>
          <p>Mountains & Snow</p>
        </div>

        <div class="card">
          <h3>🏙️ Dubai</h3>
          <p>Luxury & Skyline</p>
        </div>

        <div class="card">
          <h3>🌆 Paris</h3>
          <p>Romance & Culture</p>
        </div>

        <br/>
        <button class="btn">Start Your Journey 🚀</button>
      </div>

      <footer>
        DevOps Demo App | Travel Website 🌍
      </footer>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Travel app running on http://localhost:${PORT}`);
});