const User = require("../models/user");
const {encrypt} = require("../utils/encript")
const UserCtrl = {};


UserCtrl.getUsers = async (req, res, next) => {
    try{
        const save = await User.find();
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

UserCtrl.SearchUser = async (req, res, next) => {
    try{
        const save = await User.find(
            {$or:[
                {rol:'enterprise'},
                {rol:'teacher'},
                {rol:'userRecurrent'}
            ]}
        )
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}

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
        const { name,
            email,
            rol,
            files_id,
            post_id,
            bloq,
            services,
            booking,
            code,
            active,
            description,
            category,
            locate,
            link,
            followers,
            follows} = req.body;

        const body = { name,
            email,
            password: await encrypt(req.body.password),
            rol,
            files_id,
            post_id,
            bloq,
            services,
            booking,
            code,
            active,
            description,
            category,
            locate,
            link,
            followers,
            follows};
         
        var save= await User.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};



UserCtrl.putRolUser = async (req, res, next) => {
    try{
        const { email } = req.params;
        const save = await User.findOneAndUpdate({email: email, rol:'userRecurrent'}, {$set: {rol: 'enterprise'}}, {new: false})
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


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