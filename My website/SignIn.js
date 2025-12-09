function register() {
    let user = document.getElementById("new-username").value;
    let pass = document.getElementById("new-password").value;
    let msg = document.getElementById("register-message");

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill out all fields!";
        return;
    }

    localStorage.setItem("savedUser", user);
    localStorage.setItem("savedPass", pass);

    msg.style.color = "white";
    msg.textContent = "Account created! Redirecting...";

    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 1500);
}
