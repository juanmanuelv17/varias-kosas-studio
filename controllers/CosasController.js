import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage.js"
import { generalAlert } from "../helpers/alerts.js"
import { kosas, guardarKosa } from "../models/CosasModel.js"

let usuario = getLocalStorage('usuario')

document.getElementById("info-usuario").textContent = 'Usuario: ' + usuario.nombre
document.getElementById('btn-salir').addEventListener('click', function () {
    removeLocalStorage('usuario')
    window.location.href = '/index.html'
})

document.getElementById('btn-agregar-kosa').addEventListener('click', ()=>{
    let nombre_producto = document.getElementById("nombre-producto").value
    let precio = document.getElementById("precio").value
    let categoria = document.getElementById("categoria").value
    let materiales = document.getElementById("materiales").value
    let dimensiones = document.getElementById("dimensiones").value
    let stock = document.getElementById("stock").value
    let descripcion = document.getElementById("descripcion").value
    let foto_producto = document.getElementById("foto-producto").value
    let kosa = {nombre_producto, precio, categoria, materiales, dimensiones, stock, descripcion, foto_producto}
    kosas.push(kosa)
    guardarKosa('kosas', kosas)
    generalAlert('Registro Exitoso', 'Se guardo la cosa en a base de datos', 'sucess')
})