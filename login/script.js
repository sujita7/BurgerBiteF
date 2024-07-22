const LoginBtn = document.getElementById('Login');
const SignupBtn = document.getElementById('Signup');
const authForm = document.getElementById('authForm');
let namefield = document.getElementById("namefield");
let tittle = document.getElementById("tittle");

LoginBtn.addEventListener('click', function() {
    namefield.style.display = "none";
    tittle.innerHTML = "Login";
    LoginBtn.style.backgroundColor = '#e1a409';
    LoginBtn.style.color = 'white';
    SignupBtn.style.backgroundColor = '#e1a409';
    SignupBtn.style.color = 'white';

    // Handle login
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Login button clicked');
    console.log('Sending login request to API with:', { email, password });

    fetch('https://burgerbite-pucc.onrender.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        console.log('Response received:', response);
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.name);
            window.location.href = '../main.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

SignupBtn.addEventListener('click', function() {
    namefield.style.display = "block";
    tittle.innerHTML = "Signup";
    SignupBtn.style.backgroundColor = '#e1a409';
    SignupBtn.style.color = 'white';
    LoginBtn.style.backgroundColor = '#e1a409';
    LoginBtn.style.color = 'white';

    // Handle signup
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Signup button clicked');
    console.log('Sending signup request to API with:', { name, email, password });

    fetch('https://burgerbite-pucc.onrender.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => {
        console.log('Response received:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.name);
            window.location.href = 'main.html'; // Replace with your next screen URL
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
