const renvoieInverseDeNombre = (nombre) =>{
    let nombreInverse = 0, moduloNombre;
    if(nombre > 0){
      while(nombre > 0){
        moduloNombre = nombre % 10;
        nombre = parseInt(nombre / 10);
        nombreInverse = nombreInverse * 10 + moduloNombre;
      }
      console.log(`${nombreInverse}`);
    }else{
      while(nombre < 0){
        moduloNombre = nombre % 10;
        nombre = parseInt(nombre / 10);
        nombreInverse = nombreInverse * 10 + moduloNombre;
      }
      console.log(`${nombreInverse}`);
    }
  }
  renvoieInverseDeNombre(135);