function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML =
      "Carta não encontrada, digite o nome da carta desejada :)";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Verifica se o elemento foi encontrado
  if (section) {
    // Limpa o conteúdo anterior do section, se necessário
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let porQueEClassica = "";
    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      porQueEClassica = dado.porQueEClassica.toLowerCase();
      if (
        titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) ||
        porQueEClassica.includes(campoPesquisa)
      ) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.linkfoto}" target="_blank">
              ${dado.titulo}
            </a>
          </h2>
          <div class="descricao-meta"><b>Descrição:</b> ${dado.descricao} <br>
          <b>Porque é clássica:</b> ${dado.porQueEClassica}</div>

          <a class="saiba-mais" href="${dado.link}" target="_blank">
            Saiba mais.
          </a>
        </div>
      `;
      }
    }

    if (!resultados) {
      resultados =
        "<p>Carta não encontrada, siga a lista colocada acima! :)</p>";
    }

    section.innerHTML = resultados;
  } else {
    console.error("Elemento com ID 'resultados-pesquisa' não encontrado.");
  }
}
