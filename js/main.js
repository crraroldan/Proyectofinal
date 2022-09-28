// Esto es para el precio
let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;

totalCarrito.innerHTML = `${precioTotal} €`;

// Esto es para la cantidad
let totalpeliculas = document.getElementById("totalpeliculas");
let Cantida = 0;

totalpeliculas.innerHTML = `${Cantida}  uds`;


let objetos = [
    {
        id: "Blade Runner",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Blade Runner 2049",
        precio: 9,
        Cantida: 1
    },
    {
        id: "El señor de los anilos El retorno del rey",
        precio: 5,
        Cantida: 1
    },
    {
        id: "El señor de los anilos La comunidad del anillo",
        precio: 5,
        Cantida: 1
    },
    {
        id: "El señor de los anilos Las dos torres",
        precio: 5,
        Cantida: 1
    },
    {
        id: "Starship Troopers",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Apocalypse Now",
        precio: 8,
        Cantida: 1
    },

    {
        id: "Robocop 1",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Robocop 2",
        precio: 5,
        Cantida: 1
    },
    {
        id: "Robocop 3",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Soldado anonimo",
        precio: 7,
        Cantida: 1
    },
    {
        id: "Independence Day",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Bad Boys 1",
        precio: 6,
        Cantida: 1
    },
    {
        id: "Bad Boys 2",
        precio: 8,
        Cantida: 1
    },

    {
        id: "300",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Apocalypto",
        precio: 7,
        Cantida: 1
    },
    {
        id: "Centurion",
        precio: 8,
        Cantida: 1
    },
    {
        id: "Dune",
        precio: 10,
        Cantida: 1
    },
    {
        id: "Sin tregua",
        precio: 6,
        Cantida: 1
    },
    {
        id: "The Batman",
        precio: 7,
        Cantida: 1
    },
    {
        id: "Scarface",
        precio: 8,
        Cantida: 1
    }

];


const drag = (ev) => {

    ev.dataTransfer.setData("text", ev.target.id);
};

const allowDrop = (ev) => {

    ev.preventDefault();
};

const drop = (ev) => {

    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    precioTotal += objetoDeseo.precio;
    totalCarrito.innerHTML = `${precioTotal} €`;
 

    let objetocantidad = objetos.find(objeto => {
        return objeto.id == data
    });

    Cantida += objetocantidad.Cantida;
    totalpeliculas.innerHTML = `${Cantida} uds`;

}; 

let carrito = document.getElementById("totalCarrito");

const vaciar = () => {
    precioTotal = 0;

    carrito.innerHTML = `${precioTotal}`;
}

let muchos = document.getElementById("totalpeliculas");

const vaciar2 = () => {
    Cantida = 0;

   muchos.innerHTML = `${Cantida}`;
}

















