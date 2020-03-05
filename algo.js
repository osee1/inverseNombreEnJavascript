const rayonCercle = parseFloat(prompt("Veuillez saisir la valeur du royan d'un cercle"));
const PI = 3.15;
const surface = rayonCercle * rayonCercle * PI;
console.log(` la valeur de la surface est de ${surface.toFixed(2)}`);


const diametre = parseFloat(prompt("Veuillez saisir le diamètre."));
const rayon = diametre / 2;
console.log(` la valeur du rayon est de ${rayon.toFixed(2)}`);

const longueur = parseFloat(prompt("Veuillez saisir la longueur"));
const largeur = parseFloat(prompt("Veuillez saisir la largeur"));
const surfaceRectagle = longueur * largeur;
console.log(` la Surface du rectangle est de  ${surfaceRectagle.toFixed(2)}`);
const perimetre = (longueur * largeur) * 2;
console.log(` la valeur du Périmètre du rectangle est de  ${perimetre.toFixed(2)}`);

const nombre =prompt("Veuillez saisir la un nombre");
let testNombre = nombre.startsWith('-');
if(testNombre){
  alert("Vous avez entrés un nombre negatif");
}else{
  alert('Vous avez entrés un nombre positif');
}

const nombre1 =parseFloat(prompt("Veuillez saisir le premier nombre"));
const nombre2 =parseFloat(prompt("Veuillez saisir le deuxième nombre"));
const produit = nombre1 * nombre2;
const testSiPositifOuNegatif = produit.toString();
if(testSiPositifOuNegatif.startsWith('-')){
  console.log("Votre produit est un nombre négatif");
}else{
  console.log('Votre produit est un nombre positif');
}

const nombre =prompt("Veuillez saisir la un nombre");
let testNombre = nombre.startsWith('-');
if(testNombre){
  alert("Vous avez entrés un nombre negatif");
}else{
  alert('Vous avez entrés un nombre positif');
}if(parseInt(nombre === 0)){
  alert('Vous avez entrés un nombre 0');
}

const age = parseInt(prompt("Quelle est votre age"));
const sexe = prompt("Quelle est votre genre, Répondez par 'F' pour une femme ou 'M' pour un homme");
if(age > 20 && sexe === "M"){
  console.log('paie impots');
}else if(age >= 18 && age <= 35 && sexe === "F"){
  console.log('paie impots');
}else{
  console.log("paie pas l'impots");
}






