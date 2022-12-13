  let entrada = prompt ("¿Es usted mayor de edad? Responda con Si/No".toLowerCase())

  if(entrada === "no"){
      alert("Realice la encuesta con un mayor de edad.")
   
   }else if(entrada === "si"){
      function promediar(num1, num2, num3, num4, num5){
         let promedio = (num1 + num2 + num3 + num4 + num5)/5;
              let mensaje = `El promedio de edad de la gente que ingreso a la web es de: ${promedio}`;
             alert(mensaje);}
      let num1 = parseInt(prompt("Ingrese su edad"));
      alert (`El 1er participante tiene: ${num1}`);
     let num2 = parseInt(prompt("Ingrese su edad"));
     alert (`El 2do participante tiene: ${num2}`);
     let num3 = parseInt(prompt("Ingrese su edad"));
     alert (`El 3er participante tiene: ${num3}`);
      let num4 = parseInt(prompt("Ingrese su edad"));
      alert (`El 4to participante tiene: ${num4}`);
      let num5 = parseInt(prompt("Ingrese su edad"));
      alert (`El 5to participante tiene: ${num5}`);
     promediar(num1, num2, num3, num4, num5);
      alert ("Los datos fueron completados exitosamente");

      const edades = [num1, num2, num3, num4, num5];
 alert (`las edades presentadas fueron ${edades.join(", ")}.`)
 alert (edades.sort((a,b)=> a-b));

   }else{
      alert("introduzca un dato valido")
   }

   

       
   
   


   


 




   


  
 


 

