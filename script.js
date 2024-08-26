const inputTexto = document.querySelector(".texto_box")
const mensagem = document.querySelector(".mensagem")


function BotonCriptografar(){
    const TextoCriptografado = criptografar(inputTexto.value)
    mensagem.value = TextoCriptografado
    mensagem.style.backgroundImage = "none"
    titulo4.style.display = 'none';
    digite_texto2.style.display = "none";
    inputTexto.value = "";
}


function criptografar(StringCriptografado){
    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringCriptografado = StringCriptografado.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(StringCriptografado.includes(arrayCodigo[i][0])){
        StringCriptografado = StringCriptografado.replaceAll(arrayCodigo[i][0],arrayCodigo[i][1])
        }
    }
    return StringCriptografado;
}

function BotonDescriptografar(){
    const TextoCriptografado = descriptografar(inputTexto.value)
    mensagem.value = TextoCriptografado
    inputTexto.value = ""
}

function descriptografar(StringDesCriptografado){
    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringDesCriptografado = StringDesCriptografado.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++){
        if(StringDesCriptografado.includes(arrayCodigo[i][1])){
        StringDesCriptografado = StringDesCriptografado.replaceAll(arrayCodigo[i][1],arrayCodigo[i][0])
        }
    }
    return StringDesCriptografado;
}

function copiar(){
    mensagem.select()
    navigator.clipboard.writeText(mensagem.value)
    alert("Texto copiado")
}