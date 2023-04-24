let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});







const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const rememberMeCheckbox = document.querySelector('#remember-me');

form.addEventListener('submit', (event) => {
  event.preventDefault();


  usernameInput.setCustomValidity('');
  passwordInput.setCustomValidity('');

  
  if (usernameInput.value.trim() === '') {
    usernameInput.setCustomValidity('Please enter your username');
    usernameInput.reportValidity();
    return;
  }

 
  if (passwordInput.value.trim() === '') {
    passwordInput.setCustomValidity('Please enter your password');
    passwordInput.reportValidity();
    return;
  }


  if (passwordInput.value.trim().length < 8) {
    passwordInput.setCustomValidity('Password must have at least 8 characters');
    passwordInput.reportValidity();
    return;
  }


  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('password', passwordInput.value);
  }

  
  form.submit();
});


const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');
if (storedUsername && storedPassword) {
  usernameInput.value = storedUsername;
  passwordInput.value = storedPassword;
  rememberMeCheckbox.checked = true;
}









