document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const sumbitButton = document.getElementById('submit-btn');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        sumbitButton.innerText = 'Verifying...';
        submitButton.disabled = true;

        const username = document.getElementById('username').value;

        setTimeout(() => {
            alert(`Welcome, ${username}!`);
        
            submitButton.innerText= 'Sign In';
            submitButton.disabled = false;

            loginForm.reset();
        }, 2000);
    });
});
