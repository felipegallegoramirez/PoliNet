export class Survey{
    _id:string;
    title:string;
    answers:Array<string>;
    idbooking:string;
    responsible:Person;
    respondent:Person;
    rating:number;
    
    constructor(_id:string = "",
        title:string = "",
        answers:Array<string> = [],
        idbooking:string = "",
        responsible:Person = new Person(),
        respondent: Person = new Person(),
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
    _id:string;
    name:string;

    constructor(_id:string = "",
        name:string = "") {
        this._id = _id;
        this.name = name;
    }
}
