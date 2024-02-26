export class Request{
    _id:String;
    iduser:String;
    name:String;
    answer:Array<String>;

    constructor(_id:String = "",
        iduser:String = "",
        name:String = "",
        answer:Array<String> = []){

            this._id = _id;
            this.iduser = iduser;
            this.name = name;
            this.answer = answer;
            
    }
}