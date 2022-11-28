function promediar(num1, num2, num3, num4, num5){
let promedio = (num1 + num2 + num3 + num4 + num5)/5;
     let mensaje = `El promedio de edad de la gente que ingreso a la web es de: ${promedio}`;
     alert(mensaje);
 }

//  let num1 = parseInt(prompt("Ingrese su edad"));
//  if (num1 > 17){
//     alert("eres mayor de edad, continua con la encuesta")
//  }else{
//     alert("eres menor de edad, recomendamos que llame a un adulto para proseguir")
//  }
//  let num2 = parseInt(prompt("Ingrese su edad"));
//  if (num2 > 17){
//     alert("eres mayor de edad, continua con la encuesta")
//  }else{
//     alert("eres menor de edad, recomendamos que llame a un adulto para proseguir")
//  }
//  let num3 = parseInt(prompt("Ingrese su edad"));
//  if (num3 > 17){
//     alert("eres mayor de edad, continua con la encuesta")
//  }else{
//     alert("eres menor de edad, recomendamos que llame a un adulto para proseguir")
//  }
//  let num4 = parseInt(prompt("Ingrese su edad"));
//  if (num4 > 17){
//     alert("eres mayor de edad, continua con la encuesta")
//  }else{
//     alert("eres menor de edad, recomendamos que llame a un adulto para proseguir")
//  }
//  let num5 = parseInt(prompt("Ingrese su edad"));
//  if (num5 > 17){
//     alert("eres mayor de edad, continua con la encuesta")
//  }else{
//     alert("eres menor de edad, recomendamos que llame a un adulto para proseguir")
//  }
//  promediar(num1, num2, num3, num4, num5);
//  alert ("Los datos fueron completados exitosamente");




 let entrada = prompt ("¿Es usted mayor de edad?".toLowerCase())

 if(entrada === "no"){
    alert("Realice la encuesta con un mayor de edad.")
   
 }else{
    function promediar(num1, num2, num3, num4, num5){
       let promedio = (num1 + num2 + num3 + num4 + num5)/5;
            let mensaje = `El promedio de edad de la gente que ingreso a la web es de: ${promedio}`;
            alert(mensaje);}
    let num1 = parseInt(prompt("Ingrese su edad"));
    let num2 = parseInt(prompt("Ingrese su edad"));
    let num3 = parseInt(prompt("Ingrese su edad"));
    let num4 = parseInt(prompt("Ingrese su edad"));
    let num5 = parseInt(prompt("Ingrese su edad"));
    promediar(num1, num2, num3, num4, num5);
    alert ("Los datos fueron completados exitosamente");
 }




