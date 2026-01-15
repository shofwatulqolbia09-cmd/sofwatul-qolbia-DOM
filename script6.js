// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf Baru');
// simpan tuliskan ke dalam pargraf
pBaru.appendChild(teksPBaru);

// simpan PBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = selectionB.querySelector('p');

const h2Baru = document.getElementById('h2');
const teksH2Baru = document.createTextNode('judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
