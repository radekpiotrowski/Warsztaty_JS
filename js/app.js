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