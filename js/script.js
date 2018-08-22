// @ version 22/08/2018
// @ coded and improved by Ricardo Amr 

document.getElementById('output').style.visibility = 'hidden'; // Hide cards when no number is detected.
document.getElementById('lbsInput').addEventListener('input', function(e) {
document.getElementById('output').style.visibility = 'visible'; // Show cards with calculation.
let lbs = e.target.value;

// Declare variables to then assign a new variable rounded by 3 decimal places.
var grams = lbs / 0.0022046
var kilo = lbs / 2.2046
var onces = lbs * 16;

//Declare new variables and fix the position at 3 decimal places
var gr = grams.toFixed(3)
var kg = kilo.toFixed(3)
var oz = onces.toFixed(3)

document.getElementById('gramsOutput').innerHTML = gr;
document.getElementById('kgOutput').innerHTML = kg;
document.getElementById('ozOutput').innerHTML = oz;
});
