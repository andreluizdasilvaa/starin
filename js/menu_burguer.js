document.addEventListener("DOMContentLoaded", function() {
    var burgerMenuContainer = document.querySelector('.conteiner_burguer_menu');
    
    var menuBurger = document.querySelector('.menu_burger');
    
    burgerMenuContainer.addEventListener('click', function() {
        menuBurger.classList.toggle('show');
    });
});
