let totalpeliculas = document.getElementById("totalpeliculas");
let cosa = 0;

totalpeliculas.innerHTML = `${cosa} €`;

//Declaramos el objeto

let objetos = [
    {
        id: "Blade Runner",
        precio: 1
        
    },
    {
        id: "Blade Runner 2049",
        precio: 1
        
    },
    {
        id: "El señor de los anilos El retorno del rey",
        precio: 1
       
    },
    {
        id: "El señor de los anilos La comunidad del anillo",
        precio: 1
       
    },
    {
        id: "El señor de los anilos Las dos torres",
        precio: 1
       
    },
    {
        id: "Starship Troopers",
        precio: 1
       
    },
    {
        id: "Apocalypse Now",
        precio: 1
       
    },

    {
        id: "Robocop 1",
        precio: 1
        
    },
    {
        id: "Robocop 2",
        precio: 1
        
    },
    {
        id: "Robocop 3",
        precio: 1
       
    },
    {
        id: "Soldado anonimo",
        precio: 1
       
    },
    {
        id: "Independence Day",
        precio: 1
       
    },
    {
        id: "Bad Boys 1",
        precio: 1
       
    },
    {
        id: "Bad Boys 2",
        precio: 1
       
    },


    {
        id: "300",
        precio: 1
        
    },
    {
        id: "Apocalypto",
        precio: 1
        
    },
    {
        id: "Centurion",
        precio: 1
       
    },
    {
        id: "Dune",
        precio: 1
       
    },
    {
        id: "Sin tregua",
        precio: 1
       
    },
    {
        id: "El Chema",
        precio: 1
       
    },
    {
        id: "El Vato",
        precio: 1
       
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

    
    cosa += objetoDeseo.precio;
    
    totalpeliculas.innerHTML = `${cosa} €`;


}; 


