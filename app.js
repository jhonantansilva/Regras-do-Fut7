function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se o campoPesquisa for uma string sem nada
if(!campoPesquisa) {
 section.innerHTML = "<p>Nenhuma Pesquisa Encontrada. Você precisa digitar qual regra ou posição de campo</p>" 
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados HTML
let resultados = "";
let titulo = "";
let descricao ="";
let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) 
        || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }
  if(!resultados) {
      resultados = "Nenhuma Pesquisa Encontrada"
  }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }