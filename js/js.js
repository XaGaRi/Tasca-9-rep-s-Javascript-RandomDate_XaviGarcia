/*autor Xavi
*/
let anyA = []
let mesA = []
let diaA = []

function createDate(){

    for (let index = 0; index < 5; index++) {

        let dia = Math.floor((Math.random() * (32 - 1)) + 1)
        let any = 2022
        let mes = Math.floor((Math.random() * (12 - 0)) + 0)

        anyA[index] = any
        mesA[index] = mes
        diaA[index] = dia
    }
    ordenar(anyA, mesA, diaA)
}

function createDateCas(){
    
    for (let index = 0; index < 5; index++) {

        let dia = Math.floor((Math.random() * (32 - 1)) + 1)
        let any = 2022
        let mes = Math.floor((Math.random() * (12 - 0)) + 0)

        anyA[index] = any
        mesA[index] = mes
        diaA[index] = dia
    }
    
    ordenarCas(anyA, mesA, diaA)
}

function ordenarCas(anyA, mesA, diaA) {
    let meses= []
    fecha="Fecha "
    meses = [" de enero de ", " de febrero de ", " de marzo de ", " de abril de ", " de mayo de ", " de junio de "," de julio de "," de agosto de "," de septiembre de ", " de octubre de ", " de noviembre de "," de diciembre de "]
    
    
    mesA.sort((a, b) => {
        if (a == b) {
          return 0;
        }
        if (a < b) {
          return -1;
        }
        return 1;
    });

    diaA.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
    });

    for(let index = 0 ; index < 5; index++){
        
        var printearDate=document.getElementById("dates");
        var linew= document.createElement("div");

        var contenido = document.createTextNode("Fecha "+(index+1)+": "+diaA[index]+meses[mesA[index]]+anyA[0]);
        printearDate.appendChild(linew);
        linew.appendChild(contenido);
    }
}
function ordenar(anyA, mesA, diaA) {
    meses = [" de gener de ", " de febrer de ", " de març de ", " d'abril de ", " de maig de ", " de juny de "," de juliol de "," d'agost de "," de setembre de ", " d'octubre de ", " de novembre de "," de desembre de "]

    
    mesA.sort((a, b) => {
        if (a == b) {
          return 0;
        }
        if (a < b) {
          return -1;
        }
        return 1;
    });

    diaA.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
    });

    for(let index = 0 ; index < 5; index++){
        
        var printearDate=document.getElementById("dates");
        var linew= document.createElement("div");

        var contenido = document.createTextNode("Data "+(index+1)+": "+diaA[index]+meses[mesA[index]]+anyA[0]);
        printearDate.appendChild(linew);
        linew.appendChild(contenido);
    }
}