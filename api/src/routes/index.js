const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const rutasVideogame = require("./videogame");
const rutasVideogames = require("./videogames");
const rutasGenres = require("./genres");

router.use("/genres", rutasGenres);
router.use("/videogame", rutasVideogame);
router.use("/videogames", rutasVideogames);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
