const Survey = require("../models/survey");

const SurveyCtrl = {};


SurveyCtrl.getSurveys = async (req, res, next) => {
    try{
        const save = await Survey.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};


SurveyCtrl.createSurvey = async (req, res, next) => {
    try{
        const { title,answers,idbooking,responsible,respondent,rating} = req.body;

        const body = { title,answers,idbooking,responsible,respondent,rating};
        var save= await Survey.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

SurveyCtrl.getSurvey = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Survey.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

SurveyCtrl.editSurvey = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Survey.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

SurveyCtrl.deleteSurvey = async (req, res, next) => {
    try{
        await Survey.findByIdAndRemove(req.params.id);
        res.json({ status: "Survey Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = SurveyCtrl;