function initial(name){
const fullName = nameString.split(' ');
const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
return initials.toUpperCase();
}

// function searchName(initial, limit, callback){
// 
// 
//callback();
// }

// function (){

// }
// searchName("an", 3, callback)

// const name = [
//     "Abigail", "alexandra", "Alison",
//     "Amanda", "Angela", "Bella", 
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith", "Olivia", "Penelope"]
