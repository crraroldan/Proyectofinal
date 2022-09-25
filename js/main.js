let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;

totalCarrito.innerHTML = `${precioTotal} €`;


//Declaramos el objeto

let objetos = [
    {
        id: "Blade Runner",
        precio: 8
        
    },
    {
        id: "Blade Runner 2049",
        precio: 5
        
    },
    {
        id: "El señor de los anilos El retorno del rey",
        precio: 4
       
    },
    {
        id: "El señor de los anilos La comunidad del anillo",
        precio: 4
       
    },
    {
        id: "El señor de los anilos Las dos torres",
        precio: 4
       
    },
    {
        id: "Starship Troopers",
        precio: 4
       
    },
    {
        id: "Apocalypse Now",
        precio: 4
       
    },

    {
        id: "Robocop 1",
        precio: 8
        
    },
    {
        id: "Robocop 2",
        precio: 5
        
    },
    {
        id: "Robocop 3",
        precio: 8
       
    },
    {
        id: "Soldado anonimo",
        precio: 7
       
    },
    {
        id: "Independence Day",
        precio: 4
       
    },
    {
        id: "Bad Boys 1",
        precio: 6
       
    },
    {
        id: "Bad Boys 2",
        precio: 8
       
    },


    {
        id: "300",
        precio: 8
        
    },
    {
        id: "Apocalypto",
        precio: 7
        
    },
    {
        id: "Centurion",
        precio: 8
       
    },
    {
        id: "Dune",
        precio: 10
       
    },
    {
        id: "Sin tregua",
        precio: 6
       
    },
    {
        id: "El Chema",
        precio: 7
       
    },
    {
        id: "El Vato",
        precio: 8
       
    }


];



const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });


    precioTotal += objetoDeseo.precio;
    
    totalCarrito.innerHTML = `${precioTotal} €`;


}; 











