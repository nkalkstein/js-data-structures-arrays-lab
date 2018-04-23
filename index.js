// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  let array = [...drivers, name]
  return array
}

function prependDriver(name){
  let array = [name, ...drivers]
  return array
}

function removeLastDriver(){
  let array = drivers.slice(0, 2)
  return array
}


function removeFirstDriver(){
  let array = drivers.slice(1)
  return array
}
