'use strict';
//console.log('cześć :)');

document.addEventListener('DOMContentLoaded', function () {
      // tutaj będziemy umieszczać kod ze wszystkich zadań    
    
    var menuButton = document.querySelector('.for-dropdown');
    var subMenu = document.querySelector('.dropdown');
        
    menuButton.addEventListener('mouseover', function () {
        //console.log('hej');
        subMenu.style.display = 'block';
    });
    
    menuButton.addEventListener('mouseout', function () {
        //console.log('hej');
        subMenu.style.display = 'none';
    });
    
    var buttons = document.querySelectorAll('.read-more');
    
    
    function showHide() {
        var textArea = this.previousElementSibling;

      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony

      if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }        
    };
    //buttons[0].addEventListener('click', showHide);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    
    
});

/*
var imie = 'Radek';
console.log(imie);

var users = ['seweryn', 'basia', 'mikołaj'];

console.log(users[1]);

var a = 99;
var b = 100;

if (a > b) {
    console.log('warunek-dzień dobry');
}
else {
    console.log('warunek-witaj');
}

for (var i=0; i < users.length; i++) {
    console.log(users[i]);
}
*/