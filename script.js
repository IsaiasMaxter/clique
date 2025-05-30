// Seleciona os elementos do DOM
const counterElement = document.getElementById('counter');
const clickBtn = document.getElementById('click-btn');
const resetBtn = document.getElementById('reset-btn');

// Inicializa o contador
let clickCount = localStorage.getItem('clickCount') || 0;

// Atualiza o display do contador
function updateCounter() {
    counterElement.textContent = clickCount;
    // Salva no localStorage para persistência
    localStorage.setItem('clickCount', clickCount);
}

// Incrementa o contador quando o botão é clicado
clickBtn.addEventListener('click', () => {
    clickCount++;
    updateCounter();
    
    // Efeito visual de clique
    clickBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickBtn.style.transform = 'scale(1)';
    }, 100);
});

// Reseta o contador
resetBtn.addEventListener('click', () => {
    if(confirm('Tem certeza que deseja zerar o contador?')) {
        clickCount = 0;
        updateCounter();
    }
});

// Inicializa o contador quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
});
