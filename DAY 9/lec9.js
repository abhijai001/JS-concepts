let DATA = "secret info";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data: ", DATA );
    }
}
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";
    }
}
let stu1=new user("abhijeet","abc@gmail.com");
let admin1= new Admin("abhi","abhi@gmail.com");