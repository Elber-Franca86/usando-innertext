// Capturarando elementos

let  titulo = document.getElementById("titulo")
let link = document.querySelector("a");

// conteúdo
titulo.innerText = 'Aplicando innerText'
link.innerText = "Página Proz Educação"



// captura elemantos ul / ol eadiciona itens às listas
let listaNaoOrdenada = document.querySelector("ul")
let listOrdenada = document.querySelector("ol")

listaNaoOrdenada.innerHTML= `
    <li>Projeto Integrador</li>
    <li>HTML</li>
    <li>JavaScript</li>
`

listOrdenada.innerHTML = `
<li><a href="https://www.w3schools.com/css/default.asp">Documentação CSS</a></li>
<li><a href="https://coolors.co/">Criando Paletas de cres</a></li>
<li><a href="https://cdnjs.com/libraries/font-awesome">Buscar fontes</a></li>
`