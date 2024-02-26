const express = require("express");
const router = express.Router();
const survey = require("../controllers/survey.controller")

router.get("/", survey.getSurveys);
router.post("/", survey.createSurvey); 
router.get("/:id", survey.getSurvey); 
router.put("/:id",survey.editSurvey);
router.delete("/:id", survey.deleteSurvey);



module.exports = router 