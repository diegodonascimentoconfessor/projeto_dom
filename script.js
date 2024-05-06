

const abrirmensagem = document.getElementById("botao-abrir-mensagem")

abrirmensagem.addEventListener("click", function() {

    alert("alguém clicou no botão")
})

const inputdados = document.getElementById("input-dados")

inputdados.addEventListener("keydown", function(){
    console.log(`tecla pressionada:${letra.key}`);
})


const titulo = document.getElementById("titulo")
const botaomudartitulo = document.getElementById("botao-mudar-texto")

botaomudartitulo,addEventListener("click", function(){
        titulo.innerHTML = `
        <h5>eita, mudou !!!</h5>     
        
        `
})


imagem.addEventListener("click", function(){



const imagem  = document.getElementById ("imagem")
imagem.setAttribute("src", "./img-02.jpg")
})



const playstop = document.getElementById("playstop")
const textooriginal = playstop.textContent
 playstop.addEventListener("click", function () {
    console.log("clicou")
    if(playstop.textContent != "stop"){
        console.log( "entrei no if verdadeiro")
     playstop.textContent = "stop"
    } else{
        playstop.textContent  = textooriginal
        console.log( "entrei no if verdadeiro ")
    }
      
    
 })