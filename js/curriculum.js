const url =' https://randomuser.me/api/ ';
 let avatar = document.getElementById('avatar');
 let fullname = document.getElementById('fullname');


 fetch('https://randomuser.me/api/ ')
 .then(parseJSON)
 .then(updateProfile)
 .then(updateContact);
 

function parseJSON (res){
return res.json();
}

 function updateProfile (profile){
console.log(profile);
 avatar.src = profile.results[0].picture.medium;
 document.getElementById("nombre").innerHTML = "Mi nombre es: " + profile.results[0].name.first +" "+ profile.results[0].name.last ;
 document.getElementById("edad").innerHTML =  "Tengo: " + profile.results[0].dob.age+ " años de edad";
 document.getElementById("nacionalidad").innerHTML = "Vivo en " + profile.results[0].location.city + ", "+ profile.results[0].location.state + ", "+ profile.results[0].location.country;
 document.getElementById("email").innerHTML = "Mail: "+ profile.results[0].email;
 document.getElementById("telefono").innerHTML = "Telefono: "+ profile.results[0].phone;
 document.getElementById("celular").innerHTML = "Celular: "+ profile.results[0].cell;
   document.getElementById("linkedin").innerHTML = "Linkedin: "+ profile.results[0].login.username;
return 1;
}

function presentacion(){
   document.getElementById('card-c').style.display ="none";
   document.getElementById('card-experiencia').style.display ="none";
   document.getElementById('card-est').style.display ="none";

}
function mostrarContacto(){
   document.getElementById('card-c').style.display ="block";
   document.getElementById('card-experiencia').style.display ="none";
   document.getElementById('card-est').style.display ="none";
}

function mostrarExperiencia(){
   document.getElementById('card-experiencia').style.display ="block";
   document.getElementById('card-c').style.display ="none";
   document.getElementById('card-est').style.display ="none";
}

function mostrarEstudios(){
   document.getElementById('card-est').style.display ="block";
   document.getElementById('card-c').style.display ="none";
   document.getElementById('card-experiencia').style.display ="none";

}



