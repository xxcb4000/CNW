const buttonnext = document.getElementById('next') ;
const buttonprev = document.getElementById('prev') ;
const galleryMover = document.querySelector('.gallery-mover') ;
let positionX = 0;
let index = 0 ;
const imagesURL = ["../assets/springeasy.jpg", "../assets/jonquilles.jpg", "../assets/jonquilles2.jpg", "../assets/jonquilles3.jpg", "../assets/caillebotis.jpg"] ;

for (let i = 0 ; i < 5; i++) {
    imagesURL.forEach((url, index) => {
        const img = document.createElement('img'); // Crée une balise <img>
        img.src = url; // Définit l'attribut source de l'image
        img.id = `ìmg${index}`;
        document.querySelector('.gallery').appendChild(img); // Ajoute l'image dans la galerie
    });
}

buttonnext.onclick = function decalagedroite() {
    //alert('décalage vers la droite');
    positionX -= 630;
    index -= 1;
    galleryMover.style.transform = `translateX(${positionX}px)` ;
} ;
buttonprev.onclick = function decalagegauche() {
    //alert('décalage vers la gauche');
    positionX +=630;
    index = (index + 1)%5 ;
    galleryMover.style.transform = `translateX(${positionX}px)` ;
} ;