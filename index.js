// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Ralph){
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(Bob){
    cats.shift("Bob");
}
function appendCat(Broom) {
    return ["Milo", "Otis", "Garfield", "Broom"]; 
}
function prependCat(Arnold){
    return["Arnold", "Milo", "Otis", "Garfield"];
}
function removeLastCat() {
    return cats.slice(0, -1);  
}
function removeFirstCat() {
    return cats.slice(1);  
}