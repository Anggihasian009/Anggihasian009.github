const nama = document.querySelector('#nama');
const hari = document.querySelector('#hari');
const kuliah = document.querySelector('#kuliah')
const kuliah2 = document.querySelector('#kuliah2')
const kuliah3 = document.querySelector('#kuliah3')


nama.addEventListener('click', updateName);
hari.addEventListener('click', updateDate);
kuliah.addEventListener('click',updatematkul);
kuliah2.addEventListener('click',updatematkul2);
kuliah3.addEventListener('click',updatematkul3);




function updateName(){
    const name =prompt('Masukkan nama : ');
    nama.textContent = name;
 
}

function updateDate(){
    const date =prompt('Masukkan hari : ');
    hari.textContent = date;
}

function updatematkul(){
    const matkul=prompt('Masukkan kuliah ke-1: ');
    kuliah.textContent = matkul;
}

function updatematkul2(){
    const matkul2=prompt('Masukkan kuliah ke-2 : ');
    kuliah2.textContent = matkul2;
}

function updatematkul3(){
    const matkul3=prompt('Masukkan kuliah ke-3 : ');
    kuliah3.textContent = matkul3;
}