const usuarios = [
    {
        nombre: 'Juan Manuel Valencia',
        telefono: '3218096056',
        correo: 'correo@gmail.com',
        contrasena: '123456780',
        id: 'id123456780'
    },
    {
        nombre: 'Santiago Builes',
        telefono: '3218096556',
        correo: 'correo1@gmail.com',
        contrasena: '12345678',
        id: 'id12345678'
    }
];

export function guardarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.find((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena)
    return auth 
}