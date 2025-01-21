function isAdult(user) {
    return user.age >= 18;
}
var ildemar = {
    name: "molano",
    age: 13
};
var isAnAdult = isAdult(ildemar);
console.log("el estudiante es adulto?", isAnAdult);
