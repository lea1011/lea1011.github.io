document.addEventListener('DOMContentLoaded', function() {
    // Crear corazones flotantes
    createFloatingHearts();
    
    // Configurar animación de escritura
    setupTypingEffect();
});

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const heartSound = document.getElementById('heartSound');
    
    // Animación del sobre
    envelope.classList.add('open');
    
    // Reproducir sonido de corazón
    heartSound.play();
    
    // Mostrar carta después de un breve retraso
    setTimeout(() => {
        letter.classList.add('show');
        
        // Animar frases de amor
        animatePhrases();
        
        // Mostrar firma después de que todas las frases estén visibles
        setTimeout(() => {
            document.querySelector('.signature').classList.add('show');
        }, 4000);
    }, 800);
}

function closeLetter() {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    
    letter.classList.remove('show');
    envelope.classList.remove('open');
}

function animatePhrases() {
    const phrases = document.querySelectorAll('.phrase');
    
    phrases.forEach((phrase, index) => {
        setTimeout(() => {
            phrase.classList.add('show');
        }, index * 800);
    });
}

function setupTypingEffect() {
    const finalMessage = document.querySelector('.typed');
    const text = finalMessage.textContent;
    finalMessage.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            finalMessage.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            finalMessage.style.opacity = 1;
        }
    }, 30);
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.position = 'absolute';
        heart.style.color = `rgba(231, 76, 60, ${Math.random() * 0.5 + 0.3})`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animation = `float ${Math.random() * 6 + 4}s infinite ease-in-out`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.opacity = 0;
        
        // Hacer que los corazones aparezcan gradualmente
        setTimeout(() => {
            heart.style.opacity = 1;
        }, Math.random() * 2000);
        
        container.appendChild(heart);
    }
}