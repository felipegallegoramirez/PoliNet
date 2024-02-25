const express = require("express");
const router = express.Router();
const service = require("../controllers/service.controller")

router.get("/", service.getServices);
router.post("/", service.createService); 
router.get("/:id", service.getService); 
router.put("/:id",service.editService);
router.delete("/:id", service.deleteService);



module.exports = router 