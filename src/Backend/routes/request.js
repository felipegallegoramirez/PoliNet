const express = require("express");
const router = express.Router();
const request = require("../controllers/request.controller")

router.get("/", request.getRequests);
router.post("/", request.createRequest); 
router.get("/:id", request.getRequest); 
router.put("/:id",request.editRequest);
router.delete("/:id", request.deleteRequest);



module.exports = router 