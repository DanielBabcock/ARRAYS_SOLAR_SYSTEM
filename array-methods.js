var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

let el = document.getElementById("spaceBalls");

// listen for 


planets.forEach(function(planet){
    // make planets neater  
    el.innerHTML += planet + " ";
    
});

// Use the map method to create a new array where 
// the first letter of each planet is capitalized
let mapArray = 
planets.map(function(planet0){
        // let upperCase = planet0[0].toUpperCase();
        let upperCase = planet0.replace(planet0[0], planet0[0].toUpperCase())
        // console.log("planet0:", planet0[0].toUpperCase());
        // el.innerHTML += upperCase;
        return upperCase;
});
console.log("mapArray: ", mapArray);

// Use the filter method to create a new array that 
// contains planets with the letter 'e'
let filterArray =
    planets.filter(function(planetE){
        return planetE.includes("e");
        
});
console.log("filterArray: ", filterArray);

// Use the reduce method to create a sentence from the
//  words in the following array
var words = ["The", "early", "bird", "might", "get", 
"the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let reduceArray =
    words.reduce(function(arraySentence, currentValue){
        return arraySentence += " " + currentValue;
    });

    console.log("reduceArray: ", reduceArray);