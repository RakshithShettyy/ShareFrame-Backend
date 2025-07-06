// src/server.js
require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const port = process.env.PORT || 3000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.listen(port, () => {
  console.log(`🚀 Server is up & running on http://localhost:${port}`);
});

// Health check
app.get("/", (req, res) => res.json({ ok: true }));

// Export prisma for routes
module.exports = { app, prisma };
