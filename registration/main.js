
let elInputUsername = document.querySelector('#username'); 
let elSuccessUn = document.querySelector('.success-un'); 
let elFailureUn = document.querySelector('.failure-un');

let elInputNickname = document.querySelector('#nickname');
let elSuccessNn = document.querySelector('.success-nn');
let elFailureNn = document.querySelector('.failure-nn');

let elInputEmail = document.querySelector('#email'); 
let elSuccessEm = document.querySelector('.success-em'); 
let elFailureEm = document.querySelector('.failure-em');

let elInputPassword = document.querySelector('#password');
let elSuccessPw = document.querySelector('.success-pw');
let elFailurePw = document.querySelector('.failure-pw');

let elInputPassword2 = document.querySelector('#password2'); 
let elSuccessPw2 = document.querySelector('.success-pw2'); 
let elFailurePw2 = document.querySelector('.failure-pw2');

function usernameCheck(value) {
  return value.length >= 1;
}

function nicknameCheck(value) {
  return value.length >= 2 && value.length <= 5;
}

function emailCheck(value) {
  return /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value);
}

function passwordCheck(value) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
}

function password2Check(password, password2) {
  return password === password2;
}

elInputUsername.onkeyup = function () {
  if (usernameCheck(elInputUsername.value)) {
    elSuccessUn.classList.remove('hide'); 
    elFailureUn.classList.add('hide'); 
  }
  else {
    elSuccessUn.classList.add('hide');
    elFailureUn.classList.remove('hide');
  }
}

elInputNickname.onkeyup = function () {
  if (nicknameCheck(elInputNickname.value)) {
    elSuccessNn.classList.remove('hide'); 
    elFailureNn.classList.add('hide'); 
  }
  else {
    elSuccessNn.classList.add('hide');
    elFailureNn.classList.remove('hide');
  }
}

elInputEmail.onkeyup = function () {
  if (emailCheck(elInputEmail.value)) {
    elSuccessEm.classList.remove('hide');
    elFailureEm.classList.add('hide');
  }
  else {
    elSuccessEm.classList.add('hide');
    elFailureEm.classList.remove('hide');
  }
}

elInputPassword.onkeyup = function () {
  if (passwordCheck(elInputPassword.value)) {
    elSuccessPw.classList.remove('hide'); 
    elFailurePw.classList.add('hide'); 
  }
  else {
    elSuccessPw.classList.add('hide');
    elFailurePw.classList.remove('hide');
  }
}

elInputPassword2.onkeyup = function () {
  if (password2Check(elInputPassword.value, elInputPassword2.value)) {
    elSuccessPw2.classList.remove('hide'); 
    elFailurePw2.classList.add('hide'); 
  }
  else {
    elSuccessPw2.classList.add('hide');
    elFailurePw2.classList.remove('hide');
  }
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".container");

open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
