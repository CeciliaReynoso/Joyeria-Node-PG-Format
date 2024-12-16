const express = require("express");
const { obtenerJoyas, obtenerJoyasConFiltros, getJoya } = require("../controllers/joyasController");
const { reportConsult } = require("../middlewares/otroMiddleware")
const router = express.Router();

router.get("/joyas", obtenerJoyas);
router.get("/joyas/filtros", obtenerJoyasConFiltros);
router.get("/joyas/:id", reportConsult , getJoya)
module.exports = router;
