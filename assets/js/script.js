// Function to toggle the display of the login form
function toggleLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const signInButton = document.getElementById('signInButton'); 

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signInButton.style.display = 'none'; // Hide the Sign In button
    } else {
        loginForm.style.display = 'none';
        signInButton.style.display = 'block'; // Show the Sign In button
    }
}

// Function to simulate sign-in
function performSignIn() {
    const usernameOrEmail = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    setTimeout(() => {
        userIsSignedIn = true;
        userFirstName = "John"; // Replace with the user's actual first name
        checkSignInStatus();
        toggleLoginForm(); // Hide the login form after successful sign-in
    }, 1000);

    return false;
}

const scribbleAudio = document.getElementById("scribbleAudio");

function playScribbleSound() {
  scribbleAudio.play();
}

// Add an event listener to your buttons to trigger the sound
document.querySelector(".button-duel").addEventListener("click", playScribbleSound);
document.querySelector(".button-vote").addEventListener("click", playScribbleSound);