const Post = require("../models/post");
const User = require("../models/user");
const { encrypt } = require("../utils/encript")
const UserCtrl = {};
const { messageLogin } = require("../utils/emailprefabs/authemail");
const { messageRegister } = require("../utils/emailprefabs/registerEmail");


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
        await messageRegister(email, name)
        var save= await User.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

UserCtrl.SendCode = async (req, res, next) => {
    try{
        let user = await User.findOne({email: req.params.email})
        var x = Math.floor(Math.random() * 100000);
        user.active = true;
        user.code = x
        user = await User.findByIdAndUpdate(user._id, user)
        await messageLogin(user.email, user._id, x)
        res.status(200).send({
            mesagge: "Enviado"
        })
    }catch(err){
         console.log(err)
        res.status(400).send({
            message: "No se ha completado el envio"
        })
    }
}

UserCtrl.putPassword = async (req, res, next) => {
    try{
        let user = await User.findOne({email: req.body.email})
        if(user.code == req.body.code && user.active == true){
            const { password } = req.params;
            user.password = password
            user.active = false
            const save = await User.findByIdAndUpdate(user._id, user)
            res.status(200).send(save)
        }else{
            res.status(401).send(err)
        }
    }catch(err){
        res.status(400).send(err)
    }
}
UserCtrl.putRolTeacherUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        console.log(id)

        const save = await User.findOneAndUpdate({_id: id, rol:'userRecurrent'}, {$set: {rol: 'teacher'}}, {new: false})
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}
UserCtrl.putRolUser = async (req, res, next) => {
    try{
        const { email } = req.params;
        const save = await User.findOneAndUpdate({email: email, rol:'userRecurrent'}, {$set: {rol: 'enterprise'}}, {new: false})
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}
UserCtrl.putPhotoProfile = async (req, res, next) => {
    try{
        const image = req.file.filename;
        const { id } = req.params;
        const user = await User.findById(id);
        for(let i = 0; i < user.post_id.length; i++){
            await Post.findByIdAndUpdate(user.post_id[i], {creator_image: image});
        }
        user.files_id[0] = image;
        let save = await User.findByIdAndUpdate(id, user);

        res.status(200).send(save);
    }catch(err){
        res.status(400).send(err);
    }
}

UserCtrl.putPdfProfile = async (req, res, next) => {
    try{
        const pdf = req.file.filename;
        const { id } = req.params;
        const user = await User.findById(id);

        user.files_id[1] = pdf;

        let save = await User.findByIdAndUpdate(id, user);
        res.status(200).send(save);
    }catch(err){
        res.status(400).send(err);
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