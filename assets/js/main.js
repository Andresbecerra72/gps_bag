
  const txt_titulo = document.getElementById('text_titulo');
  const txt_nombre = document.getElementById('text_nombre');
  const txt_mensaje = document.getElementById('text_mensaje');
  const forma_registro = document.getElementById('forma_registro');
  const forma_contacto = document.getElementById('forma_contacto');




function setRegistro(e) {

  e.preventDefault(); // previene el reload del SUBMMIY


  // codigo para capturar el valor del input
  const form = new FormData(e.target);
  const nombre = form.get("nombre");
  const apellido = form.get("apellido");
  // console.log(nombre + " " + apellido);

  forma_registro.className = 'hide'; // esconde el formulario

  txt_titulo.innerText = 'Bienvenido..!';
  txt_nombre.innerText = nombre + " " + apellido;

  
}


function setContacto(e) {

  e.preventDefault(); // previene el reload del SUBMMIY

 
 
   // codigo para capturar elementos del formulario
   const form = e.target;

   for (let i = 0; i < form.length; i++) {
     const element = form[i];

     element.value = '';
     element.setAttribute('disabled', ''); // 
     
   }

  txt_mensaje.innerText = 'Pronto Un asesor se pondra en contacto.';
  

  
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}