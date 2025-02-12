function showPasswordScreen() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("passwordScreen").classList.remove("hidden");
}

function checkPassword() {
    let password = document.getElementById("passwordInput").value;
    if (password === "06132024") { // Change to your actual password
        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("countdownScreen").classList.remove("hidden");
        startCountdown("2022-06-01"); // Change to your real date
    } else {
        document.getElementById("errorMessage").innerText = "Wrong password!";
    }
}

function startCountdown(startDate) {
    let start = new Date(startDate);

    function updateCountdown() {
        let now = new Date();
        let diff = now - start;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerText = 
            '244 Days 23 Hrs 29 Mins 16 Secs';
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function showGallery() {
    document.getElementById("countdownScreen").classList.add("hidden");
    document.getElementById("galleryScreen").classList.remove("hidden");
}

function showMessage() {
    document.getElementById("galleryScreen").classList.add("hidden");
    document.getElementById("messageScreen").classList.remove("hidden");
}
