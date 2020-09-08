class Usuario {
    constructor(username, password, email, telefono) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.telefono = telefono;
    }
}

var contador = localStorage.getItem("contador"); 
var usuarios;
var stringUsuarios;// valor en string
if(contador==null){ 
   contador = 0;
   usuarios = [];//arrays
}else{
    stringUsuarios = localStorage.getItem("usuarios")
    usuarios = JSON.parse(stringUsuarios)    
}

if (contador == 0){
    llenarUsuarios();
    contador = contador + 1
    localStorage.setItem("contador", contador);
// cargarUnUsuario();
}

function llenarUsuarios() { 
    var user1 = new Usuario("majo", "majo","majo@hotmail.com", "2846554");
    var user2 = new Usuario("juana", "juana","juana@hotmail.com", "1486468");
    var user3 = new Usuario("montaner", "montaner","montaner@hotmail.com", "284568");
    var user4 = new Usuario("elver", "elver","elver@hotmail.com", "1811253");

    usuarios.push(user1);
    usuarios.push(user2);
    usuarios.push(user3);
    usuarios.push(user4);

    
    var stringUsuarios = JSON.stringify(usuarios) 
    localStorage.setItem("usuarios", stringUsuarios);
}

function cargarUnUsuario() {
    var a = this.usuarios[2];
    document.getElementById("username").setAttribute("value", a.username);
}

function registro() {
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value; 
    var telefono = document.getElementById("telefono").value;
    
    var usuario=new Usuario(username,password,email,telefono);  
    usuarios.push(usuario);
    var stringUsuarios = JSON.stringify(usuarios)
    localStorage.setItem("usuarios", stringUsuarios);//El método setItem () establece el valor del elemento de objeto de almacenamiento especificado.

    document.getElementById("username").value = ""; 
    document.getElementById("password").value = "";
    document.getElementById("email").value = ""; 
    document.getElementById("telefono").value = "";

    alert("Usuario Registrado");
    var aleatorio;
    aleatorio=(Math.round(Math.random()*9999));
    alert("Tu codigo es:" + aleatorio);
    var NumCliente;
    NumCliente=(Math.round(Math.random()*20));
    alert("Numero de cliente :" + NumCliente)
    
}


function login(){
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

    usuarios.forEach(user => {
        if(user.username == username && user.password == password){
            location.href="mapa.html";
        }
        else{
            console.log('Credenciales incorrectas');
        }
    });

    
}


// function LoginEasy(){
//     var username = document.getElementById("username").value; 
//     var password = document.getElementById("password").value;

//     if(username == "majo" && password == "majo"){
//         location.href="productos.html";
//     }
//     else{
//         alert("Error de credenciales");
//     }


    


    


