// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(e => e.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
  return drivers.filter(e => e.startsWith(name))
}

function matchName(drivers, name){
  return drivers.filter(e => e.name === name)
}