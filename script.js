const submit = document.querySelector('#submit');
const continueBtn = document.querySelector('#continue');
const completedPage = document.querySelector('#.completed')
const firstPage = document.querySelector('input-details');
const nameInput = document.querySelector('#name');
const nameField = document.querySelector('h2');
const cardNumInput = document.querySelector('#card-num');
const cardNum = document.querySelector('#h1')
const monthInput = document.querySelector("#month");
const month = document.querySelector(".mm");
const yearInput = document.querySelector("#year");
const year = document.querySelector('.yy');
const cvcInput = document.querySelector('#cvc');
const cvc = document.querySelector('.cvc-content');

nameInput.addEventListener('keyup', function cardName(e){
  nameField.innerText = e.target.value;
});

cardNumInput.addEventListener('keyup', function cardNumber(e){
  cardNum.innerText = e.target.value;
});

monthInput.addEventListener('keyup', function monthNumber(e){
  month.innerText = e.target.value;
});

yearInput.addEventListener('keyup', function yearNumber(e){
  year.innerText = e.target.value;
});

cvcInput.addEventListener('keyup', function cvcNumber(e){
  cvc.innerText = e.target.value;
});

