  let frutas = [];
  let laticinios = [];
  let congelados = [];
  let doces = [];

  let opcao = "";

  while (opcao !== "3") {
    opcao = prompt("O que você deseja fazer?\n1 - Adicionar item\n2 - Remover item\n3 - Encerrar");

    if (opcao === "1") {

      let comida = prompt("Qual comida você deseja adicionar?");
      let categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces)");

      if (categoria.toLowerCase() === "frutas") {
        frutas.push(comida);
      } else if (categoria.toLowerCase() === "laticínios") {
        laticinios.push(comida);
      } else if (categoria.toLowerCase() === "congelados") {
        congelados.push(comida);
      } else if (categoria.toLowerCase() === "doces") {
        doces.push(comida);
      } else {
        alert("Categoria inválida. O item não foi adicionado.");
      }

    } else if (opcao === "2") {

      let todasAsListas = frutas.concat(laticinios, congelados, doces);

      if (todasAsListas.length === 0) {
        alert("A lista está vazia. Não há nada para remover.");
      } else {
        let listaFormatada = "Itens na lista:\n" + todasAsListas.join(", ");
        let remover = prompt(listaFormatada + "\nQual item você deseja remover?");


        if (frutas.indexOf(remover) !== -1) {
          frutas.splice(frutas.indexOf(remover), 1);
          alert(`${remover} foi removido da lista.`);
        } else if (laticinios.indexOf(remover) !== -1) {
          laticinios.splice(laticinios.indexOf(remover), 1);
          alert(`${remover} foi removido da lista.`);
        } else if (congelados.indexOf(remover) !== -1) {
          congelados.splice(congelados.indexOf(remover), 1);
          alert(`${remover} foi removido da lista.`);
        } else if (doces.indexOf(remover) !== -1) {
          doces.splice(doces.indexOf(remover), 1);
          alert(`${remover} foi removido da lista.`);
        } else {
          alert("Não foi possível encontrar o item dentro da lista!");
        }
      }
    }
  }

  // exibir lista final
  let mensagem = "Lista de compras:\n";
  mensagem += `   Frutas: ${frutas.join(", ")}\n`;
  mensagem += `   Laticínios: ${laticinios.join(", ")}\n`;
  mensagem += `   Congelados: ${congelados.join(", ")}\n`;
  mensagem += `   Doces: ${doces.join(", ")}\n`;

  alert(mensagem);