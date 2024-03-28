const Request = require("../models/request");

const RequestCtrl = {};


RequestCtrl.getRequests = async (req, res, next) => {
    try{
        const save = await Request.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

RequestCtrl.findRequestbyIduser = async (req, res, next) => {
    try{
        let { id } = req.params.iduser;
        let valid = false;
        const save = await Request.findOne({id})
        if(save){
            valid = true
        }else{
            valid = false
        }
        res.status(200).send(valid)
    }catch(err){
        res.status(200).send(err)
    }
}

RequestCtrl.createRequest = async (req, res, next) => {
    try{
        const { iduser,name,cellphone} = req.body;

        const body = { iduser,name,cellphone};
        var save= await Request.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

RequestCtrl.getRequest = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Request.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

RequestCtrl.editRequest = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Request.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

RequestCtrl.deleteRequest = async (req, res, next) => {
    try{
        await Request.findByIdAndRemove(req.params.id);
        res.json({ status: "Request Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = RequestCtrl;