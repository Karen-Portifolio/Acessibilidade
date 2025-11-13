document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('botao-alto-contraste'); // CORRIGIDO

    let tamanhoAtualFonte = 1;

    // Abrir/fechar menu
    botaoDeAcessibilidade.addEventListener('click', function (){
        const estaAberto = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        
        botaoDeAcessibilidade.classList.toggle('aberto');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        
        botaoDeAcessibilidade.setAttribute('aria-expanded', !estaAberto);
    });

    // Aumentar fonte
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte = Math.min(tamanhoAtualFonte + 0.1, 2.0); // limite máximo
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir fonte
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte = Math.max(tamanhoAtualFonte - 0.1, 0.8); // limite mínimo
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alto contraste
    alternaContraste.addEventListener('click', function(){
        document.body.classList.add('alto-contraste');
        document.body.classList.toggle('alto-contraste');
        document.body.classList.remove('alto-contraste');
    });
})

;

// ScrollReveal (fora do DOMContentLoaded, se já estiver carregado)
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });