const tableauNombre = [1,2,4,6,9,2];
const sommeNombreConsecutifs = (tab)=>{
let position = 0;
let positionFinale = tab.length - 3;
for(let e = 0; e < tab.length; e++){
    let somme = 0;
    for(let i = position; i < position + 3 ; i++){
        somme += tab[i];
        if(somme === 7){
          return true;    
        }
        if(position > positionFinale){
          return false;
        }
    }  
    position++; 
}
return false;
}
console.log(sommeNombreConsecutifs(tableauNombre));