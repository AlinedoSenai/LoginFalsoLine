document.getElementById("corForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    // Gera uma cor aleatória
    const cores = ["Vermelho", "Azul", "Verde", "Amarelo", "Roxo", "Laranja", "Rosa", "Preto", "Branco", "Cinza"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    // Exibe o resultado
    document.getElementById("resultado").style.display = "block";
    document.getElementById("corExibida").textContent = corAleatoria;

    // Define o caminho inicial da imagem com base na cor (tentando .jpg primeiro)
    let caminhoImagem = `images/${corAleatoria}.jpg`;
    const images = document.getElementById("images");

    // Exibe a imagem
    images.src = caminhoImagem;
    images.style.display = "block";

    // Verifica se a imagem .jpg foi carregada corretamente, e tenta .png se falhar
    images.onerror = function() {
        console.log(`Imagem .jpg não encontrada: ${caminhoImagem}, tentando .png`);

        // Tenta carregar a imagem .png
        caminhoImagem = `images/${corAleatoria}.png`;
        images.src = caminhoImagem;

        // Se a imagem .png também não for encontrada, oculta a imagem
        images.onerror = function() {
            console.error("Imagem não encontrada: " + caminhoImagem);
            images.style.display = "none"; // Oculta a imagem se nem .jpg nem .png forem encontrados
        };
    };
});





