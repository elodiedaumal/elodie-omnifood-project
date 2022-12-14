//recipe page section diet

const btnDietEl = document.querySelector(".btn-diet");
const dietEl = document.querySelector(".section-diet");
btnDietEl.addEventListener("click", () => {
  document.body.classList.toggle("diet-open");
  btnDietEl.classList.toggle('buttonsReceipeActive')
});

//recipe page meal filter 


const tagElAll = Array.from(document.querySelectorAll('.meal'))
const tagElKids = Array.from(document.querySelectorAll('.kids'))
const tagElGluten = Array.from(document.querySelectorAll('.gluten'))
const tagElLiquid = Array.from(document.querySelectorAll('.liquid'))
const tagElMeat = Array.from(document.querySelectorAll('.meat'))
const btTagEl = Array.from(document.querySelectorAll('.btn'))
const btnTagElAll = document.querySelector("#all")
const btnTagElKids = document.querySelector('#kids')
const btnTagElGluten = document.querySelector('#gluten')
const btnTagElLiquid = document.querySelector('#liquid')
const btnTagElMeat = document.querySelector('#meat')

function removeShow() {
  tagElAll.forEach(function (node, idx) {
    node.classList.remove('show');
  })
}

function removeActive() {
  btTagEl.forEach(function (node, idx) {
    node.classList.remove('buttonsReceipeActive')
  });
}

function addShowAll(){
  removeActive();
  btnTagElAll.classList.add('buttonsReceipeActive');
  tagElAll.forEach(function (node, idx) {
   node.classList.add('show');
})}

function addShowKids(){
  removeActive();
  btnTagElKids.classList.add('buttonsReceipeActive')
  removeShow();
  tagElKids.forEach(function (node, idx) {
   node.classList.add('show');
})}
function addShowGluten(){
  removeActive();
  btnTagElGluten.classList.add('buttonsReceipeActive')
  removeShow();
  tagElGluten.forEach(function (node, idx) {
   node.classList.add('show');
})}
function addShowLiquid(){
  removeActive();
  btnTagElLiquid.classList.toggle('buttonsReceipeActive');
  removeShow();
  tagElLiquid.forEach(function (node, idx) {
   node.classList.add('show');
})}
function addShowMeat(){
  removeActive();
  btnTagElMeat.classList.add('buttonsReceipeActive');
  removeShow();
  tagElMeat.forEach(function (node, idx) {
   node.classList.add('show');
})}


addShowAll()
btnTagElAll.addEventListener('click', (event) => addShowAll())
btnTagElKids.addEventListener('click', (event) => addShowKids())
btnTagElGluten.addEventListener('click', (event) => addShowGluten())
btnTagElLiquid.addEventListener('click', (event) => addShowLiquid())
btnTagElMeat.addEventListener('click', (event) => addShowMeat())




