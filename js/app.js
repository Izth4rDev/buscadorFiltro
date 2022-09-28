//Variables
const resultado = document.querySelector('#resultado');

const años = document.querySelector('#year');
const max = new Date().getFullYear(); //nos entrega el año actual
const min = max -122; //año 1900

document.addEventListener('DOMContentLoaded', () =>{

    mostrarAutos(); //muestra los automoviles al cargar

    selectAños();//llena el select

});


//Funciones
function mostrarAutos (){

    autos.forEach(auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        
        ${marca} ${modelo} - ${year} - ${puertas} Puertas- transmision:${transmision}-Precio:${precio}- ${color} 


        `
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