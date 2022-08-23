const { Router } = require("express");
const PessoasController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoasController.getAll);
router.get("/pessoas/:id", PessoasController.getOne);
router.post("/pessoas/", PessoasController.addNew);
router.put("/pessoas/:id", PessoasController.update);
router.delete("/pessoas/:id", PessoasController.delete);

module.exports = router;
