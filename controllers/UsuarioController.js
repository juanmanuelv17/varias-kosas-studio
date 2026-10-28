import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";
import { setLocalStorage } from "../helpers/local-storage.js";

function iniciarSesion() {
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('clave').value;
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        setLocalStorage('usuario', auth) 
        generalAlert('Bienvenido al sistema','Sera redireccionado al catalogo de cosas', 'success')
        setTimeout(()=>{
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 2000)
        return
        
    }
    generalAlert('Error', 'Usuario y/o contraseña incorrectos', 'error')
    setTimeout(()=>{
        return window.location.href = "/index.html"
    }, 3000)
    
}

document.getElementById('btn-login').addEventListener('click',iniciarSesion)