const Post = require("../models/post");

const PostCtrl = {};


PostCtrl.getPosts = async (req, res, next) => {
    try{
        const save = await Post.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

PostCtrl.getPostsByUser = async (req, res, next) =>{
    try{
        const save = await Post.find({creator_id:req.params.id})
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }   
}

PostCtrl.createPost = async (req, res, next) => {
    try{
        let image = req.file.filename;
        const { title,
            creator_image,
            creator_id,
            creator_name,
            description,
            likes,
            comment} = req.body;
            
        const body = { title,
            creator_image,
            image,
            creator_id,
            creator_name,
            description,
            likes,
            comment};
            
        
        var save= await Post.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

PostCtrl.putPost = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Post.findByIdAndUpdate(id, {$set: req.body}, {new: true});  
        res.status(200).send(save);
    }catch(err){
        res.status(400).send(err);
    }
}


PostCtrl.getPost = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Post.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

PostCtrl.deletePost = async (req, res, next) => {
    try{
        await Post.findByIdAndRemove(req.params.id);
        res.json({ status: "Post Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = PostCtrl;