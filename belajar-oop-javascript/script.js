//DOM Selection
// document.getElementById -> mengembalikan element

//Selection 1

/*const judul = document.getElementById("judul");
judul.style.color = "yellow";
judul.style.backgroundColor = "gray";
judul.innerHTML = "Bintang Ridwan Pribadi";
judul.style.fontFamily = "sans-serif";

//getElementsByTagName -> mengembalilan HTML Collection
const p = document.getElementsByTagName("p");
p[2].style.backgroundColor = "gray";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "gray";
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '40px';

//getElementsByClassName -> mengembalikan HTML Collection
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'ini di ubah dari JS' */

//Selection 2

//querySelector -> mengembalikan Elemenst
/*const p4 = document.querySelector('#b p');
p4.style.color = ('green');
p4.style.fontSize = ('30px');

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.backgroundColor = ('orange');

//querySelectorAll
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = ('lightblue')
}*/

// DOM Manipulation 1

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Bintang<em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'hallo world'

// const judul = document.querySelector("#judul");
// judul.style.backgroundColor = "lightblue";

// const a = document.querySelector("section#a a");

// const p2 = document.querySelector(".p2");

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

//const p2 = document.querySelector('.p2')
//p2.setAttribute('class', 'label')

// DOM Manipulation 2

// // membuat paragraf baru
// const pNew = document.createElement('p');
// const newText = document.createTextNode('paragraf baru');
// // menggambungkan pNew dan newText
// pNew.appendChild(newText);
// console.log(pNew);
// // simpan pNew di section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pNew)



// //membuat li baru
// const liNew = document.createElement('li');
// const newItem = document.createTextNode('item baru');
// //simpan linew dan newitem
// liNew.appendChild(newItem);
// //simpan linew di sectionB
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');
// ul.insertBefore(liNew, li2);

// //mengahapus paragraf baru
// const link = document.getElementById('a')[0];
// sectionA.removeChild(link);

//mengganti paragraf 4
// const sectionB = document.getElementById('b');
// const p4 =  sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('judul baru');

// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

// const p3 = document.querySelector('.p3');
// // p3.onclick = function() {
// //   p3.style.backgroundColor = 'lightblue';
// // }
// // p3.onclick = function() {
// //   p3.style.color = 'red';
// // }

// p3.addEventListener('click', function() {
//   p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('click', function() {
//   p3.style.color = 'red';
// });