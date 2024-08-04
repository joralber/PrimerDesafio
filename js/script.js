document.getElementById("btn-copiar").style.display = "none";
// document.getElementById("mensaje").style.display = "none";

const textArea= document.querySelector('.text-area');
// const mensaje= document.querySelector('.mensaje');


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// console.table(matrizCodigo)

function btnEncriptar(){
    
    const texto = textArea.value;
    if (texto === '') {
        alert('El campo no puede estar vacío.');
        return ;
    }

    if (!validarSinTildes(texto)) {
        alert('El texto no puede contener tildes (acentos).');
        return; // Salir de la función si se encuentran tildes
    }

    const textoEncriptado =encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value='';

        document.getElementById("parrafos").style.display = "none";
        document.getElementById("btn-copiar").style.display = "block";
        document.getElementById("mensaje").style.display = "block";

    mensaje.style.backgroundImage='none';
    
}

function encriptar(stringEncriptada){
    

let matrizCodigo= [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
stringEncriptada= stringEncriptada.toLowerCase();

for(let i=0; i<matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
                       
        }
}
return stringEncriptada;
}



function btnDesencriptar(){
    
    const texto = textArea.value;
    if (texto === '') {
        alert('El campo no puede estar vacío.');
        return ;
    }

    if (!validarSinTildes(texto)) {
        alert('El texto no puede contener tildes (acentos).');
        return; // Salir de la función si se encuentran tildes
    }

    document.getElementById("mensaje").style.display = "block";

    const textoEncriptado =desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value='';
}


function validarSinTildes(texto) {
    // Expresión regular que coincide con caracteres acentuados
    const regexTildes = /[áéíóúÁÉÍÓÚ]/;
    return !regexTildes.test(texto);
}

function desencriptar(stringDesncriptada){
    
    let matrizCodigo= [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesncriptada= stringDesncriptada.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1]))
            {
                stringDesncriptada= stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
                           
            }
    }
    return stringDesncriptada;
    }
    


    function btnCopiar(){
        var textarea = document.querySelector('.mensaje');

        // Selecciona el texto dentro del textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
        // Copia el texto al portapapeles
        document.execCommand('copy');
    
    }

  



    