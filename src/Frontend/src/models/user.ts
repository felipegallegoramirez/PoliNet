export class User{

  _id:String ;
  name:String;
  email:String;
  password:String;
  rol:String;
  files_id:Array<String>;
  post_id:Array<String>;
  bloq:Array<{
    day:Array<number>;
  }>;
  services:Array<String>;
  booking:Array<String>;
  code:String;
  active:String;
  description:String;
  category:String;
  locate:String;
  link:String;
  Followers:Array<String>;
  Follows:Array<String>;

  constructor(
    _id:String = "",
    name:String = "",
    email:String = "",
    password:String = "",
    rol:String = "",
    files_id:Array<String> = [],
    post_id:Array<String> = [],
    bloq:Array<{
      day:Array<number>,
    }> = [],
    services:Array<String> = [],
    booking:Array<String> = [],
    code:String = "",
    active:String = "",
    description:String = "",
    category:String = "",
    locate:String = "",
    link:String = "",
    Followers:Array<String> = [],
    Follows:Array<String> = []
    ){
      this._id = _id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.rol = rol;
      this.files_id = files_id;
      this.post_id = post_id;
      this.bloq = bloq;
      this.services = services;
      this.booking = booking;
      this.code = code;
      this.active = active;
      this.description = description;
      this.category = category;
      this.locate = locate;
      this.link = link;
      this.Followers = Followers;
      this.Follows = Follows;
  }
}