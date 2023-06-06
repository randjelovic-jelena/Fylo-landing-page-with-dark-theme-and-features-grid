'use strict';

const form=document.querySelector('form');
const inputEmail=document.querySelector('#email');
const submitBtn=document.querySelector('.btn-submit');
const emailStatus=document.querySelector('.email-wrong');

const emptyField=()=>{
	inputEmail.value='';
}

const checkEmail=()=>{
	let email=inputEmail.value;
	const regCheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.match(regCheck)){
		emailStatus.style='color:var(--col-cyan)';
		emailStatus.innerText='Successfully sent!';
	
		setTimeout(()=>{
			emailStatus.innerText='';
			emptyField();
		},1500);
		
	}else{
		emailStatus.style='color:var(--col-light-red)';
		emailStatus.innerText='Please enter a valid email address';
		setTimeout(()=>{
			emailStatus.innerText='';
			emptyField();
		},1500);
	}
}

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	checkEmail();
})