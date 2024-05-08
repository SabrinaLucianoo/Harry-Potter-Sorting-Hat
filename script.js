var mensagens = [
    "GRIFINÓRIA!",
    "CORVINAL!",
    "SONSERINA!",
    "LUFA-LUFA!"
];

function realizarSorteio() {
    // Lista dos retângulos
    var casas = document.querySelectorAll('.infoHouses');

    // Sorteio de um número entre 0 e 3 (índices dos retângulos)
    var indiceSorteado = Math.floor(Math.random() * casas.length);

    // Remove a classe de destaque de todos os retângulos
    casas.forEach(function(infoHouses) {
        infoHouses.classList.remove('destaque');
    });

    // Exibe a mensagem correspondente ao resultado do sorteio
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerText = mensagens[indiceSorteado];
    mensagemDiv.style.display = 'block'; // Exibe a mensagem
}

