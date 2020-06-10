//const API_KEY = '8889a23cfd1f46329c49a2998ddba4e3';

function exibeTexto () {
    let query = document.getElementById('valuePesquisa').value;
    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Notícias sobre: "${query}"</span>`;
    
    divTela.innerHTML = texto;

}


document.getElementById('btnPesquisa').addEventListener('click', exibeTexto);
