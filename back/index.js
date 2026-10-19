
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route principale
app.get("/", (req, res) => {
    res.send("Hello from le front,Bilal Boudda");
});

// Route login
app.get("/login", (req, res) => {
    res.send("LOGIN TESTT!!!");
});

// Route sign-up
app.get("/sign-up", (req, res) => {
    res.send("SIGNUP TESTTT");
});

// Route API pour le frontend
app.get("/api/test",(req, res) => {
    res.json({
        message: "FRONTEND SUCCESS"
    });
});

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.log("Erreur MongoDB :", err.message));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
