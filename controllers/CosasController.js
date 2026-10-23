import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage.js"
import { generalAlert } from "../helpers/alerts.js"

let usuario = getLocalStorage('usuario')

document.getElementById("info-usuario").textContent = 'Usuario: ' + usuario.nombre
document.getElementById('btn-salir').addEventListener('click', function () {
    removeLocalStorage('usuario')
    window.location.href = '/index.html'
})

