

const StatusCtrl = {};
const User = require("../models/user");




StatusCtrl.getStatus = async (req, res, next) => {
    try{
        const save = await User.find();
        res.status(200).send({
            status: "Ok"
        })
    }catch(err){
        res.status(400).send(err)

    }
};



module.exports = StatusCtrl;