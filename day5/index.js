  let listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: []
  };

  let adicionarMais = "sim";

  while (adicionarMais.toLowerCase() === "sim") {
    adicionarMais = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)");

    if (adicionarMais.toLowerCase() === "não") {
      break;
    }

    let comida = prompt("Qual comida você deseja adicionar?");
    let categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces)");

    if (listaDeCompras[categoria]) {
      listaDeCompras[categoria].push(comida);
    } else {
      alert("Categoria inválida. O item não foi adicionado.");
    }
  }

  let mensagem = "Sua lista de compras:\n";
  for (let categoria in listaDeCompras) {
    mensagem += `   ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
  }

  alert(mensagem);