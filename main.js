const cano = document.querySelector('.cano');
const mario = document.querySelector('.mario')
const nuvens = document.querySelector('.nuvens')
const mensagemPerdeu = document.querySelector('.perdeu');

const jump = () => {
    mario.classList.add('pular');
    setTimeout(() => {
        mario.classList.remove('pular');
    }, 600);
};

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

function gameOver() {
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
    const posicaoNuvens = nuvens.offsetLeft;

    if (posicaoCano <= 90 && posicaoCano > 0 && posicaoMario < 20) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.src = './assets/game-over.png';
        mario.style.bottom = `${posicaoMario}px`;
        mario.style.width = `5rem`;
        mario.style.marginLeft = `3rem`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${posicaoNuvens}px`

        document.removeEventListener('keydown', jump);
        document.removeEventListener('touchstart', jump);

        mensagemPerdeu.style.display = 'flex'
        mensagemPerdeu.style.justifyContent = 'center'
        mensagemPerdeu.style.alignItems = 'center'
        mensagemPerdeu.style.gap = '1rem'
        mensagemPerdeu.style.flexDirection = 'column'
    }

    // Continuar o loop do jogo
    requestAnimationFrame(gameOver);
}

// Inicie o loop do jogo
requestAnimationFrame(gameOver);

mensagemPerdeu.document.addEventListener('click', reiniciar);

function reiniciar() {
    location.reload();
    mensagemPerdeu.style.display = 'none';
    jogoEmAndamento = true;
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump);
}