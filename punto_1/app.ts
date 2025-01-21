type User = {
    name:String;
    age:number
}
function isAdult(user: User): boolean{
    return user.age >=18;
}
const ildemar:User ={
    name:"molano",
    age: 20
}

const isAnAdult: boolean = isAdult(ildemar);
console.log("el estudiante es adulto?",isAnAdult);