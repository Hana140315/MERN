// // GIVEN
var example = "I'm the example!";
console.log(example);

// //AFTER HOISTING BY THE INTERPRETER
var example;
example = "I'm the example!";
console.log(example); // logs undefined

//*******1******** */
var hello = 'world'; 
console.log(hello);                                   

//********2******** */                                

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//*********3************** */
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//******5******** */
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//*****6******* */
mean();
console.log(food);
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//*****7***** */
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//******8****** */
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//*******Bouns********* */

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.students = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));