import { Person } from "./survey";

export class Post{
    _id:String;
    title:String;
    images:Array<String>;
    creator_image:String;
    creator_id:String;
    content:String;
    description:String;
    likes:Array<Person>;
    comments:Array<Comment>;

    constructor(_id:String = "",
        title:String = "",
        images:Array<String> = [],
        creator_image:String = "",
        creator_id:String = "",
        content:String = "",
        description:String = "",
        likes:Array<Person> = [],
        comments:Array<Comment> = []
    ){
        this._id = _id;
        this.title = title
        this.images = images;
        this.creator_image = creator_image;
        this.creator_id = creator_id;
        this.content = content;
        this.description = description;
        this.likes = likes;
        this.comments = comments;
    }
}

class Comment{
    _id:String;
    name:String;
    description:String;
    constructor(_id:String = "",
        name:String = "",
        description:String = ""
    ){
        this._id = _id;
        this.name = name;
        this.description = description;
    }
}