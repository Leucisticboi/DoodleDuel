const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirmPassword-signup').value.trim();

    if (username && email && password && confirmPassword) {
        // send post route
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password, confirmPassword }),
            headers: { 'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert ('Failed sign up');
        }
    }
};

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);