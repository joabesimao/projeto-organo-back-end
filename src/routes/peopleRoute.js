const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/pessoas", PeopleController.getAllColaborators);
router.get("/pessoas/:id", PeopleController.getOne);
router.post("/pessoas/", PeopleController.createColaborator);
router.put("/pessoas/:id", PeopleController.update);
router.delete("/pessoas/:id", PeopleController.delete);

module.exports = router;
