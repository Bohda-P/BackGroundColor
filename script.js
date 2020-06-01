function something(name, surname, age) {
   this.name = name;
   this.surname = surname;
   this.age = age;
}
const btn = document.querySelector('#change-bg');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'tomato', '#661097', 'rgb(130, 19, 158)', 'black'];


btn.addEventListener('click', () => {
   const colorIndex = parseInt(Math.random() * colors.length)
   document.body.style.backgroundColor = colors[colorIndex]
});

const btnSec = document.querySelector('#change-hex');
const body = document.querySelector('body');
const hex = document.querySelector('#hex-value');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btnSec.addEventListener('click', () => {
   let hesh = '#';
   for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexValues.length);
      hesh += hexValues[index];
   }

   hex.innerHTML = ' ' + hesh;
   body.style.backgroundColor = hesh;
});





