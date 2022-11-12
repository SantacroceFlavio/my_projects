// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById(''.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } 
    else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour, je m’appelle Flavio Santacroce", "Après une longue carrière de plus de 15 ans dans la restauration j’ai décidé de me reconvertir dans l’informatique. Cela fait maintenant 3 mois que j’ai commencé dans le cadre de la formation mixte mon apprentissage d’informaticien à l’école des Arches à Lausanne. En plus des cours je me forme à coté de manière autodidacte aux divers langages informatiques comme HTML 5, CSS 3, Javascript, Python 3 et Mysql que j’utilise dans mes divers projets personnels et scolaires afin de réaliser mon objectif le plus rapidement possible, devenir développeur. Plus qu’un avenir professionnel je me suis découvert une véritable vocation celle de coder."],
    typeSpeed: 20,
  });