const express = require("express");
const { obtenerJoyas, obtenerJoyasConFiltros, getJoya } = require("../controllers/joyasController");

const router = express.Router();

router.get("/joyas", obtenerJoyas);
router.get("/joyas/filtros", obtenerJoyasConFiltros);
router.get("/joyas/:id", getJoya)
module.exports = router;
