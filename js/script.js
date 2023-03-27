//array con precios de productos
const productos = [
    {
        nombre: "Racador para gato",
        precio: 15000,
        img: "./img/",
    },
    {
        nombre: "bolsa Pro Plan",
        precio: 8900,
        img: "",
    },
    {
        nombre: "Juguete",
        precio: 5000,
        img: "",
    },
    {
        nombre: "Pelota",
        precio: 500,
        img: "",
    },
    {
        nombre: "Plato",
        precio: 600,
        img: "",
    }
]

const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modelEl = document.getElementById('modalLogin');


//Datos de usuario//
function validarUsuario(usersDb, user, pass) {

    let encontrado = usersDb.find(usersDb => usersDb.mail == user)

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function saludar(usuario) {
    nombreusuario.innerHtml = 'Bienvenido/a, <span>${usuario.name}</span>'
}

numeroDeCuotas(seleccioneProducto)

function numeroDeCuotas(producto, resultado,) {
    let numeroIngresado = parseInt(prompt("Tenemos 3 a 6 cuotas sin interes"))

    for (let i = 3; i <= 12; i++) {
        switch (producto) {
            case 1:
                {
                    let resultado = precioRascadorgato / i
                    alert(precioRascadorgato + " por " + i + "meses es=" + resultado);
                    break;
                }
            case 2:
                {
                    let resultado = precioBolsaproplan / i
                    alert(precioBolsaproplan + " por " + i + "meses es=" + resultado);
                    break;
                }
            case 3:
                {
                    let resultado = precioJuguetegato / i
                    alert(precioJuguetegato + " por " + i + "meses es=" + resultado);
                    break;
                }
            case 4:
                {
                    let resultado = precioPelota / i
                    alert(precioPelota + " por " + i + "meses es=" + resultado);
                    break;
                }
            case 5:
                {
                    let resultado = precioPlato / i
                    alert(precioPlato + " por " + i + "meses es=" + resultado);
                    break;
                }
            default:
                alert('Elegiste una opcion invalida');
                break;
        }
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    if (!mailLogin.value || !passLogin.value) {
        alert('Todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
        if (!data) {
            alert('Usuario y/o contraseña erroneos')
        } else {

            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
        }
    }

})
alert('Muchas gracias por haber realizado la compra')