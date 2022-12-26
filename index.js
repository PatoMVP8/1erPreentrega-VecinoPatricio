let entrada = prompt ("¿Es usted mayor de edad? Responda con Si/No" .toLowerCase())

  if(entrada === "no"){
      alert("Realice la encuesta con un mayor de edad.")
   
   }else if(entrada === "si"){

      

      function promediar(num1, num2, num3, num4, num5){
         let promedio = (num1 + num2 + num3 + num4 + num5)/5;
              let mensaje = `El promedio de edad de la gente que ingreso a la web es de: ${promedio}`;
             alert(mensaje);}
      let num1 = parseInt(prompt("Ingrese su edad"));
      
     let num2 = parseInt(prompt("Ingrese su edad"));
     
     let num3 = parseInt(prompt("Ingrese su edad"));
    
      let num4 = parseInt(prompt("Ingrese su edad"));
     
      let num5 = parseInt(prompt("Ingrese su edad"));
      
      let user1 = {name: "participante 1" ,edad: num1};
      let user2 = {name: "participante 2" ,edad: num2};
      let user3 = {name: "participante 3" ,edad: num3};
      let user4 = {name: "participante 4" ,edad: num4};
      let user5 = {name: "participante 5" ,edad: num5};
      
      let participantes = [ user1, user2, user3, user4, user5 ];
      
      function calcularPromedio(participantes) {
        return participantes.reduce((acum, user) => acum + user.edad, 0) / participantes.length;
      }
      
      alert(calcularPromedio(participantes)); 

      const edades = [num1, num2, num3, num4, num5];
 alert (`las edades presentadas fueron ${edades.join(", ")}.`)
 alert (edades.sort((a,b)=> a-b));

 localStorage.setItem("datos", JSON.stringify(participantes));
 
 let participantesStorage = JSON.parse(localStorage.getItem("datos"));

 
 participantesStorage.forEach((user) => {
   let div = document.createElement("div");
   div.innerHTML = ` <h2> ID: ${user.edad} </h2>`   ;

   contenedor.append(div);
 });

 
   }else{
      alert("introduzca un dato valido")
   }

       
   
   


   


 




   


  
 


 

