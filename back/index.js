const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Route principale
app.get("/", (req, res) => {
    res.send("Hey from le front,Bilal Boudda");
});

// Route login
app.get("/login", (req, res) => {
    res.send("LOGIN TESTT!!!");
});

// Route sign-up
app.get("/signup", (req, res) => {
    res.send("SIGNUP TESTTT");
});

// Route API pour le frontend
app.get("/api/test",(req, res) => {
    res.json({message: "FRONTEND SUCCESS"});
});
async function connectDB() {
    try {
        const uri = process.env.MONGODB_URI 
        if (!uri) {
            throw new Error('MONGO_URI / MONGODB_URI non définie dans le fichier .env');
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}
connectDB();
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});