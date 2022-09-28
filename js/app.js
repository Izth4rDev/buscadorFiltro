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

    mostrarAutos(autos); //muestra los automoviles al cargar

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

    filtrarAuto();
});

maximo.addEventListener('change', (e) =>{ 
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', (e) =>{ 
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
});

transmision.addEventListener('change', (e) =>{ 
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', (e) =>{ 
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//Funciones
function mostrarAutos (autos){

    limpiarHtml();

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

//limpiar HTML

function limpiarHtml(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTrans).filter(filtrarColor);
    console.log(resultado);
    mostrarAutos(resultado)

}

//funciones de filtrado que utiliza el filter

function filtrarMarca (auto){ //itera en todos los objetos de autos

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

        return auto.year === parseInt(year); //hay que parsear para poder comparar string vs string
    }
    
    return auto;
    
}

function filtrarMin (auto){

    const {minimo} = datosBusqueda;

    if(minimo){
       
        return auto.precio >= parseInt(minimo);
    }

    return auto;
}

function filtrarMax(auto){

    const {maximo} = datosBusqueda;
    if(maximo){

        return auto.precio <= parseInt(maximo); 

    }

    return auto;

}

function filtrarPuertas(auto){

    const {puertas} = datosBusqueda;

    console.log(puertas);
    if(puertas){

        return auto.puertas === parseInt(puertas);

    }
    return auto;
}

function filtrarTrans(auto){

    const {transmision} = datosBusqueda;

    if(transmision){

        return auto.transmision === transmision;

    }
    return auto;
}

function filtrarColor (auto){

    const {color} = datosBusqueda;

    if(color){

        return auto.color === color;

    }
    return auto;   

}