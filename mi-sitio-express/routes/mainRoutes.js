const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Rutas principales
router.get("/", mainController.home);
router.get("/about", mainController.about);

// Contacto
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);

// Admin
router.get("/admin", mainController.admin);

// Pokedex
router.get("/pokedex", mainController.pokedexView);
router.post("/pokedex", mainController.savePokemon);

module.exports = router;
