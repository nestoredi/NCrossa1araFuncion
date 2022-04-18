//damos la bienvenida

let nombre;
let auxSuperf2;
const bienvenida = ()=> {

do{

    
    nombre = prompt("Bienvenido al calculador de superficies, ingrese su nombre:");
  } while (nombre === "" || !isNaN(nombre));
  alert("Hola :"+ nombre);

}

// primero elijamos la superficie


const elegirSuperf = ()=>{
    let auxSuperf;
     auxSuperf= parseInt(prompt(`Ingresar superficie\n,1)Circulo\n,2)triangulo\n,3)cuadrado/rectangulo`));

     while (auxSuperf > 3 || auxSuperf < 1){
        auxSuperf= parseInt(prompt(`Ingresar superficie\n,1)Circulo\n,2)triangulo\n,3)cuadrado/rectangulo`));
    
    }

   let auxSuperf2;

  switch (auxSuperf) {
    case 1:
      auxSuperf2 = "circulo";
      break;
    case 2:
      auxSuperf2 = "triangulo";
      break;
    case 3:
      auxSuperf2 = "cuadrado/rectangulo";
      break;
    default:
      alert("No es una superficie del menu");
      
    
  }
  let auxSuperf1;
  
  
  if(auxSuperf==1){
       auxSuperf2= parseFloat(prompt("entrar radio :"));
      while(isNaN(auxSuperf2)){
         auxSuperf2= parseFloat(prompt("entrar radio :"));   
      }
      let superficie= 3.1416*(auxSuperf2*auxSuperf2);
      alert("la superficie del circulo es :"+superficie);

  }else if(auxSuperf==2){
      auxSuperf2= parseFloat(prompt("entre la base:"));
      auxSuperf1= parseFloat(prompt("entre la altura:"));
      while(isNaN(auxSuperf2) || isNaN(auxSuperf1)){
      auxSuperf2= parseFloat(prompt("entre la base:"));
      auxSuperf1= parseFloat(prompt("entre la altura:"));}
      let superficie= (auxSuperf2 * auxSuperf1)/2;

      alert("la superficie del triangulo es :"+superficie);
  }else {
    auxSuperf2= parseFloat(prompt("entre la base:"));
    auxSuperf1= parseFloat(prompt("entre la altura:"));
    while(isNaN(auxSuperf2) || isNaN(auxSuperf1)){
      auxSuperf2= parseFloat(prompt("entre la base:"));
      auxSuperf1= parseFloat(prompt("entre la altura:"));}
       superficie= (auxSuperf2 * auxSuperf1);

    
    alert("la superficie del rectangulo es :"+superficie);

  }

  return auxSuperf2;
  console.log(auxSuperf2);
};

bienvenida();
let supElegida= elegirSuperf();