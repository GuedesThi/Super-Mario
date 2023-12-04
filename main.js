const cano = document.querySelector('.cano');
const mario = document.querySelector('.mario')
const nuvens = document.querySelector('.nuvens')

const jump = () => {
    mario.classList.add('pular');
    setTimeout(() => {
        mario.classList.remove('pular');
    }, 600);
};

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)


function atualizarJogo() {
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
    }

    // Continuar o loop do jogo
    requestAnimationFrame(atualizarJogo);
}

// Inicie o loop do jogo
requestAnimationFrame(atualizarJogo);
