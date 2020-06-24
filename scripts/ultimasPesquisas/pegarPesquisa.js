function salvarPesquisas() {

    var valor = document.getElementById("valuePraSalvarModal").value;
    var tituloValor = document.getElementById("tituloDoMenu").value;

    let contador=0;
    if(localStorage.getItem("pesquisa1"))
        contador++;
    if(localStorage.getItem("pesquisa2"))
        contador++;
    if(localStorage.getItem("pesquisa3"))
        contador++;
    if(localStorage.getItem("pesquisa4"))
        contador++;
    
    let contadorTitulo = 0;
    if(localStorage.getItem("titulo1"))
        contadorTitulo++;
    if(localStorage.getItem("titulo2"))
        contadorTitulo++;
    if(localStorage.getItem("titulo3"))
        contadorTitulo++;
    if(localStorage.getItem("titulo4"))
        contadorTitulo++;

    for(let j=contador; j>0; j--)
    {
        let aux = localStorage.getItem("pesquisa"+j);
        let auxT = localStorage.getItem("titulo"+j);

        localStorage.setItem("pesquisa"+parseInt(j+1), aux);
        localStorage.setItem("titulo"+parseInt(j+1), auxT);
    }
    localStorage.setItem("titulo1", tituloValor);
    localStorage.setItem("pesquisa1", valor);

    exibirPesquisas();

}

function exibirPesquisas(){
    document.getElementById("ultima1").innerHTML = localStorage.getItem("titulo1");
    document.getElementById("ultima2").innerHTML = localStorage.getItem("titulo2");
    document.getElementById("ultima3").innerHTML = localStorage.getItem("titulo3");
    document.getElementById("ultima4").innerHTML = localStorage.getItem("titulo4");
}

function executaPesquisaSalvas1 () {
    let query = localStorage.getItem("pesquisa1");

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?language=pt&q=${query}&apiKey=${API_KEY}`)
    xhr.send();

    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Notícias sobre: "${query}"</span>`;
    
    divTela.innerHTML = texto;
}
function executaPesquisaSalvas2 () {
    let query = localStorage.getItem("pesquisa2");

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?language=pt&q=${query}&apiKey=${API_KEY}`)
    xhr.send();

    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Notícias sobre: "${query}"</span>`;
    
    divTela.innerHTML = texto;
}
function executaPesquisaSalvas3 () {
    let query = localStorage.getItem("pesquisa3");

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?language=pt&q=${query}&apiKey=${API_KEY}`)
    xhr.send();

    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Notícias sobre: "${query}"</span>`;
    
    divTela.innerHTML = texto;
}
function executaPesquisaSalvas4 () {
    let query = localStorage.getItem("pesquisa4");

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?language=pt&q=${query}&apiKey=${API_KEY}`)
    xhr.send();

    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Notícias sobre: "${query}"</span>`;
    
    divTela.innerHTML = texto;
}

exibirPesquisas();

document.getElementById('btnQueSalva').addEventListener('click', salvarPesquisas);

document.getElementById('ultima1').addEventListener('click', executaPesquisaSalvas1);
document.getElementById('ultima2').addEventListener('click', executaPesquisaSalvas2);
document.getElementById('ultima3').addEventListener('click', executaPesquisaSalvas3);
document.getElementById('ultima4').addEventListener('click', executaPesquisaSalvas4);