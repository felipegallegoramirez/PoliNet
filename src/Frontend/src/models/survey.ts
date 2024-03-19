export class Survey{
    _id:String;
    title:String;
    answers:Array<String>;
    idbooking:String;
    responsible:Person;
    respondent:Person;
    rating:number;
    
    constructor(_id:String = "",
        title:String = "",
        answers:Array<String> = [],
        idbooking:String = "",
        responsible:Person,
        respondent: Person,
        rating:number = 0){
        
            this._id = _id;
            this.title = title;
            this.answers = answers;
            this.idbooking = idbooking;
            this.responsible = responsible;
            this.respondent = respondent;
            this.rating = rating;        
    }
}
export class Person {
    _id:String;
    name:String;

    constructor(_id:String = "",
        name:String = "") {
        this._id = _id;
        this.name = name;
    }
}
