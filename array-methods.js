console.log("Solar system")
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function () {
  document.getElementById("planets").innerHTML = `${planets}`
})
var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized

  planets.map(function (value){
    document.getElementById("planets").innerHTML += `<div>${value.charAt(0).toUpperCase()}${value.slice(1)}</div>`
  })

// Use the filter method to create a new array that contains planets with the letter 'e'
planets.filter(function (value){
  if (value.includes('e')) {

  document.getElementById("planets").innerHTML += `<span>${value}</span> `
}
})
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
words.reduce(function (a,b) {
 return a.concat(b)
})
document.getElementById("planets").innerHTML +=  `<div>${words.join(" ")}</div>`
