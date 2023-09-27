// Function to handle the "Duel" button click
function handleDuelButtonClick() {
    // Hide the "Doodle Duel" text
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.display = 'none';

    // Display the paragraph box with the prompt
    const promptParagraph = document.getElementById('promptParagraph');
    promptParagraph.style.display = 'block';

    // Create and display a box in the middle of the screen
    const box = document.createElement('div');
    box.style.width = '300px';
    box.style.height = '300px';
    box.style.backgroundColor = '#f0f0f0'; // Customize the box's appearance
    box.style.position = 'absolute';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(box);

    // Create and display a countdown timer in the top left corner
    const timer = document.createElement('div');
    timer.style.position = 'absolute';
    timer.style.top = '20px';
    timer.style.left = '20px';
    timer.style.fontSize = '20px';
    timer.style.color = 'white';
    document.body.appendChild(timer);

    let countdownMinutes = 20;
    let countdownSeconds = 0;

    const countdownInterval = setInterval(() => {
        if (countdownMinutes === 0 && countdownSeconds === 0) {
            clearInterval(countdownInterval);
            // Timer has reached 0, you can perform any actions you want here
        } else {
            if (countdownSeconds === 0) {
                countdownMinutes--;
                countdownSeconds = 59;
            } else {
                countdownSeconds--;
            }

            // Display the countdown timer in the format "MM:SS"
            timer.textContent = `Time left: ${countdownMinutes.toString().padStart(2, '0')}:${countdownSeconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

document.querySelector('#duelButton').addEventListener('click', handleDuelButtonClick);

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
