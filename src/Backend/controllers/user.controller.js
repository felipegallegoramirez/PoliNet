const User = require("../models/user");

const UserCtrl = {};


UserCtrl.getUsers = async (req, res, next) => {
    try{
        const save = await User.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};


UserCtrl.getUsersService = async (req, res, next) => {
    try{
        const save = await User.find();
        const { id } = req.params;
        let fil = save.filter((x)=>x.services.includes(id))
        console.log()
        res.status(200).send(fil)
    }catch(err){
        res.status(400).send(err)

    }
};

UserCtrl.createUser = async (req, res, next) => {
    try{
        const { name,email,password,rol,profresion,files_id,post_id,bloq,services,booking,code,active,description,category,locate,link,followers,follows} = req.body;

        const body = { name,email,password,rol,profresion,files_id,post_id,bloq,services,booking,code,active,description,category,locate,link,followers,follows};
        var save= await User.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

UserCtrl.getUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await User.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

UserCtrl.editUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

UserCtrl.deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndRemove(req.params.id);
        res.json({ status: "User Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = UserCtrl;