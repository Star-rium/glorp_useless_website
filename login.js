const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "glorp" && password === "blorp") {
        alert("Login successful!");
        window.location.href = 'index.html';
    } else {
        errorMsg.classList.remove('hidden');
    }
});
