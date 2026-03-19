// LISTE DES VARIABLES
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // SÉLECTION DES POINTS

let currentIndex = 0;

// MISE À JOUR DES BULLETS POINTS
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // POINT ACTIF
        } else {
            dot.classList.remove('dot_selected'); // RENDRE LES AUTRES POINTS INACTIFS
        }
    });
}

// MISE À JOUR DES POINTS INDICATEURS, IMAGES ET TEXTE
function updateCarrousel(index, direction) {
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // MISE À JOUR DE L'IMAGE
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // MISE À JOUR DU TEXTE
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// GESTION CLIC FLÈCHE GAUCHE
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarrousel(currentIndex, 'left');
    updateDots(currentIndex); // MISE À JOUR DES POINTS INDICATEURS
});

// GESTION CLIC FLÈCHE DROITE
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarrousel(currentIndex, 'right');
    updateDots(currentIndex); // MISE À JOUR DES POINTS INDICATEURS
});

