//const API_KEY = '8889a23cfd1f46329c49a2998ddba4e3';

function exibeTexto () {
    let divTela = document.getElementById('pesquisaAtual');
    let texto = '';

    texto = `<span id="pesquisaAtual">Principais notícias de: Entreterimento</span>`;
    
    divTela.innerHTML = texto;

}


document.getElementById('cateEntreterimento').addEventListener('click', exibeTexto);