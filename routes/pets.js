const express = require("express");
const router = express.Router();
const petCtrl = require("../controllers/pets");

router.get("/", petCtrl.index);
router.post("/", petCtrl.create);
router.get("/:petId", petCtrl.show);
router.put("/:petId", petCtrl.update);
router.delete("/:petId", petCtrl.remove);

module.exports = router;
