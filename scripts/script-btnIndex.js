const API_KEY = '8889a23cfd1f46329c49a2998ddba4e3';

function exibeNoticias () {
    let divTela = document.getElementById('conteudo');
    let texto = '';


    let dados = JSON.parse(this.responseText);
    for(i=0; i<dados.articles.length; i++)
    {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-Noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titutlo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - ${noticia.source.name} - ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content}<a href="${noticia.url}"> Leia mais...</a>
                </span>
             </div>
        `;
    };

    
    divTela.innerHTML = texto;

}

function executaPesquisa () {
    let query = document.getElementById('valuePesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?language=pt&q=${query}&apiKey=${API_KEY}`)
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);