const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('sign-up').addEventListener('click', function() {
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        window.location.href = 'interface.html'; 
    }
});


document.getElementById('sign-in').addEventListener('click', function() {
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    if (email === '' || password === '') {
        alert('Please fill in both the email and password fields.');
    } else {
        window.location.href = 'interface.html'; 
    }
});
