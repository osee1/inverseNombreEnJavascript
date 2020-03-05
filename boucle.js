const valeur = parseInt(prompt('Entrez le nombre dont vous voulez connaitre la factoriel'));
let factorielle = 1;
let str = '';
for(let i = 1; i <= valeur; i++){
  str = str + i + ' x ';
  factorielle = factorielle * i;
}
str = str.split('');
str.pop();
str.pop();
str = str.reverse();
//str = str.join();
alert("La Factorie de "+ valeur + "qui vaut "+ str +" = "+ factorielle);


let nombre = 0;
compteur = 0;
do{
  compteur++;
  nombre = parseInt(prompt('Entrez un nombre compris entre 1 et 3'));
  if(nombre <= 3 && nombre >= 1){
    alert("Vous etes dans le bon");
  }else{
    alert("Vous n'etes pas dans le bon");
  }
}while(!(nombre <= 3 && nombre >= 1));
 
let nombre = 0;

do{
  nombre = parseInt(prompt('Entrez un nombre compris entre 10 et 20'));
  if(nombre > 20){
    alert("Plus grand");
  }else{
    alert("Plus petit");
  }
}while(!(nombre <= 20 && nombre >= 10));
 

let nombre = parseInt(prompt('Entrez un nombre'));
let str = '';
for(i = nombre + 1; i <= nombre + 10; i++){
  str = str + i + ','
}
str = str.split(',');
str.pop();
alert(str);

let nombre=parseInt(prompt("Veuillez entrez un nombre"));
let compteur=0;
const tableDeMultiplicationNombre = (nombre) =>{
while(compteur < 10)
{
  compteur++;
  resultat = nombre*compteur;
  console.log(nombre +" x "+compteur+" = "+resultat+ "\n");
}
}
tableDeMultiplicationNombre(nombre);

let nombre = parseInt(prompt('Entrez un nombre'));
let resultat = 0;
for(let i = 1; i <= nombre; i++){
  resultat += i;
}
alert(resultat);

const valeur = parseInt(prompt('Entrez le nombre dont vous voulez connaitre la factoriel'));
let factorielle = 1;
for(let i = 1; i <= valeur; i++){
  factorielle = factorielle * i;
}
;
alert("La Factorie de "+ valeur + " est de "+ factorielle);


let tableauDeNombre = [];
for(let i = 1; i <= 21; i++){
  let nombreAleatoire = Math.round(Math.random() * 20);
  tableauDeNombre.push(nombreAleatoire);
}
let plusGrandNombre = 0;
let position = 0;
for(let e = 0; e < tableauDeNombre.length; e++){
  console.log(e + " : "+ tableauDeNombre[e]);
  if(plusGrandNombre < tableauDeNombre[e]){
    position = e;
    plusGrandNombre = tableauDeNombre[e];
  }
}
console.log(`Le plus grand nombre est ${plusGrandNombre} et il est retrouvé à la position ${position + 1}`);


