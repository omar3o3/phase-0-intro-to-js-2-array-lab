// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
  cats.push('Ralph');
}

function destructivelyPrependCat(){
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  let newCats = [...cats, name];
  return newCats;
}

function prependCat(name){
  let newCats = [name, ...cats];
  return newCats;
}

function removeLastCat(){
  let newCats = [...cats];
  newCats.pop();
  return newCats;
}

function removeFirstCat (){
  let newCats = [...cats];
  newCats.shift();
  return newCats;
}
