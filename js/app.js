//Variables
const max = new Date().getFullYear(); //nos entrega el año actual
const min = max -122; //año 1900

//datos del formulario
const marca = document.querySelector('#marca');
const años = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor del resultado
const resultado = document.querySelector('#resultado');

const datosBusqueda = {

    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''

};

document.addEventListener('DOMContentLoaded', () =>{

    mostrarAutos(); //muestra los automoviles al cargar

    selectAños();//llena el select

});

//Event listener para los select de busqueda (filtrado)

marca.addEventListener('change', (e) =>{ //el click tbn funciona =D
  datosBusqueda.marca = e.target.value;
  
  filtrarAuto();

});

años.addEventListener('change', (e) =>{ 
    datosBusqueda.year = e.target.value;

    filtrarAuto();
});

minimo.addEventListener('change', (e) =>{ 
    datosBusqueda.minimo = e.target.value;

});

maximo.addEventListener('change', (e) =>{ 
    datosBusqueda.maximo = e.target.value;

});

puertas.addEventListener('change', (e) =>{ 
    datosBusqueda.puertas = e.target.value;

});

transmision.addEventListener('change', (e) =>{ 
    datosBusqueda.transmision = e.target.value;

});

color.addEventListener('change', (e) =>{ 
    datosBusqueda.color = e.target.value;

});

//Funciones
function mostrarAutos (){

    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        
        ${marca} ${modelo} - ${year} - ${puertas} Puertas- transmision:${transmision}-Precio:${precio}- ${color} 


        `;
        //insertar en HTML
        
        resultado.appendChild(autoHTML);
    });

}


//Genera los años del select

function selectAños(){

for (let i=max; i>=min; i--){

    const option = document.createElement('option');
    option.value = i;
    option.textContent= i;
    años.appendChild(option);

}


}

//Funcion que filtra en base a la busqueda

function filtrarAuto(){
    //se pueden encadenar los filtrados si hay mas de una opcion de filtrado
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    console.log(resultado);
}

function filtrarMarca (auto){

    const {marca} = datosBusqueda;

    if(marca){
       
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto){

    const {year} = datosBusqueda;
    //console.log(typeof year); viene como string
    //console.log(typeof auto.year); viene como numero

    if(year){

        return auto.year === parseInt(year);
    }
    
    return auto;
    
}