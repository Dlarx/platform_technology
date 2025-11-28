const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>IT 412 Final Project</title>
      <link rel="stylesheet" href="style.css" />
      <!-- Poppins font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    </head>

    <body>
      <div class="container">
        <h1 class="title">Gerald M. Diasanta</h1>
        <p class="section">Class Section: <strong>BA4101</strong></p>

        <p class="quote">
          “Waste your time wisely.”
        </p>
      </div>
    </body>
    </html>
  `);
});

// Use PORT env var (Render and Codespaces friendly)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
