//const API_KEY = '8889a23cfd1f46329c49a2998ddba4e3';

function exibeNoticias () {
    let divTela = document.getElementById('conteudo');
    let texto = '';

    let n = parseInt(0);

    let dados = JSON.parse(this.responseText);
    for(i=0; i<dados.articles.length; i++)
    {
        n++;
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <div class="box-Noticia">
        <img src="${noticia.urlToImage!=null?noticia.urlToImage:`https://source.unsplash.com/random/120x80/?sig=${n}`}" alt="">
        <span class="titulo">${noticia.title!=null?noticia.title:'Notícia sem título'}</span><br>
        <span class="creditos">${data.toLocaleDateString()} - ${noticia.source.name} - ${noticia.author!=null?noticia.author:'Autor não definido'}</span><br>
        <span class="text">
        ${noticia.content!=null?noticia.content:'Texto não encontrado'}<a href="${noticia.url}" target="_blank"> Leia mais...</a>
        </span>
     </div>
        `;
    };

    
    divTela.innerHTML = texto;

}

function executaPesquisa () {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?sources=google-news-br&apiKey=${API_KEY}`)
    xhr.send();
}

document.getElementById('fonteGoogle').addEventListener('click', executaPesquisa);
