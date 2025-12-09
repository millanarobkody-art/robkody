
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let message = document.getElementById("login-message");

    const savedUser = localStorage.getItem("savedUser");
    const savedPass = localStorage.getItem("savedPass");

    const successSound = document.getElementById("successSound");
    const errorSound = document.getElementById("errorSound");

    if (!savedUser || !savedPass) {
        message.style.color = "orange";
        message.textContent = "No account found — please create one.";
        showSignInForm(); 
        return;
    }

    if (username === savedUser && password === savedPass) {
        message.style.color = "white";
        message.textContent = `Welcome, ${username}! Redirecting...`;
        successSound.play().catch(()=>{});

        
        successSound.play().catch(()=>{});

        setTimeout(() => {
            window.location.href = "home.html";
        }, 800);

    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password!";
        errorSound.play().catch(()=>{});
    }
}



document.addEventListener("click", () => {
    const successSound = document.getElementById("successSound");
    const errorSound = document.getElementById("errorSound");

    if (successSound) successSound.play().then(() => successSound.pause()).catch(() => {});
    if (errorSound) errorSound.play().then(() => errorSound.pause()).catch(() => {});
}, { once: true });


function toggleMusic() {
    const bgMusic = document.getElementById("bgMusic");
    const btn = document.querySelector(".music-btn");

    if (bgMusic.paused) {
        bgMusic.play();
        btn.style.filter = "brightness(1.2)"; 
    } else {
        bgMusic.pause();
        btn.style.filter = "brightness(1)";
    }
}


function forgotPass() {
    alert("Contact admin to reset your password.");
}

function goToSignIn() {
        window.location.href = "SignIn.html";
    }

    function forgotPass() {
    document.getElementById("forgot-box").classList.add("show");
}

function closeForgot() {
    document.getElementById("forgot-box").classList.remove("show");
}

function sendReset() {
    const user = document.getElementById("forgotUser").value;
    const msg = document.getElementById("login-message");

    if (user.trim() === "") {
        msg.textContent = "Bro type something";
        return;
    }

    msg.textContent = "Reset link sent to " + user ;
    closeForgot();
}
