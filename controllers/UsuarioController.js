import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";


function iniciarSesion() {
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('clave').value;
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        generalAlert('Bienvenido al sistema','Sera redireccionado al catalogo de cosas', 'succes')
        setTimeout(()=>{
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 3000)
        
    }
    generalAlert('Error', 'Usuario y/o contraseña incorrectos', 'error')
    setTimeout(()=>{
        return window.location.href = "/index.html"
    }, 3000)
    
}

document.getElementById("btn-login").addEventListener('click', iniciarSesion)
