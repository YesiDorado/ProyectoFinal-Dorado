const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


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

const productos = [
    {
        nombre: "Rascador para gato",
        precio: 15000,
        img: "/img/rascador.png",
    },
    {
        nombre: "bolsa Pro Plan",
        precio: 8900,
        img: "/img/bolsaproplan.jpg",
    },
    {
        nombre: "Juguete",
        precio: 5000,
        img: "/img/juguete.jpg",
    },
    {
        nombre: "Pelota",
        precio: 500,
        img: "/img/pelota.jpg",
    },
    {
        nombre: "Plato",
        precio: 600,
        img: "/img/plato.jpg",
    }
];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
`;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent)
    });

    const total =carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
});

/*numeroDeCuotas(seleccioneProducto)

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
alert('Muchas gracias por haber realizado la compra')*/