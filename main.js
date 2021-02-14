const name = 'Mateusz';
const age = 22; 

console.log(`nazywam się ${name} i mam ${age} lata.`);
console.log(`Siemanko! Jestem ${name} i strona internetowa pwostała w wywniku szkolenia WTF. :)`);

const heading = document.querySelector('.main-heading--js');
heading.innerHTML = `Nazywam się ${name} i mam ${age} lata.`;