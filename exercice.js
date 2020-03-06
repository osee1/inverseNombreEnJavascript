let phrase = "Je suis un congolais et mon numéro de téléphone est +24399898434 et mon adresse mail est : jojo@kinshasadigital.com .J’utilise aussi jojo.jiji@gmail.com et jiji.yaya@gmail.com .Je m’authentifie avec mon numéro de téléphone Vodacom qui est le +243817396064. D’ailleur,en passant, mon père est brésilien et ma mère russe.";

phrase = phrase.split(/[ ,]/);
console.log(phrase);
//1. Tout les numéros
const toutLeNumero = phrase.filter((numero)=>{
    return numero.startsWith('+243');
});
// la fonction qui supprime le point à la fin des numéros
const supprimerLePoint = (tableauNumero)=>{
    for(let i = 0; i < tableauNumero.length; i++){
        if(tableauNumero[i].endsWith('.')){
            tableauNumero[i] = tableauNumero[i].replace('.', '');      
        }
    }
};
supprimerLePoint(toutLeNumero);
console.log(toutLeNumero);
//2. Tout les adresses
const toutLesAdresseMails = phrase.filter((adresseMail)=>{
    return adresseMail.includes('@');
});
console.log(toutLesAdresseMails);

//3. Tout les numéros voda
const toutLeNumeroVodacom = toutLeNumero.filter((numeroVoda)=>{
    return numeroVoda.startsWith('+24381');
});
console.log(toutLeNumeroVodacom);

//4. Tous les adresses non prof
const toutLesAdresseMailsNomProf = phrase.filter((adresseMailNonPro)=>{
    return adresseMailNonPro.includes('@gmail');
});
console.log(toutLesAdresseMailsNomProf);





