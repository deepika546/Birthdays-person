document.addEventListener("DOMContentLoaded", function () {
    let balloonContainer = document.querySelector(".balloons");
    let colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "cyan", "violet", "gold"];

    for (let i = 20; i--; ) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloonContainer.appendChild(balloon);
    }
});

/* 🎶 Auto Play Song */
window.onload = function() {
    document.getElementById("birthday-song").play();
};

/* ⬇️ Scroll Down */
document.getElementById("scrollDown").addEventListener("click", function() {
    window.scrollBy({ top: 500, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function () {
    let balloonContainer = document.querySelector(".balloon-container");
    let colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "cyan", "violet", "gold"];

    for (let i = 0; i < 500; i++) { // 500 balloons
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        let randomLeft = Math.random() * 100;  // Random position
        let randomTime = 5 + Math.random() * 5;  // 5s to 10s animation
        let randomColor = colors[Math.floor(Math.random() * colors.length)];  // Random color

        balloon.style.left = randomLeft + "%";
        balloon.style.animationDuration = randomTime + "s";
        balloon.style.backgroundColor = randomColor;  // Assign random color

        balloonContainer.appendChild(balloon);
    }
});
window.addEventListener("click", function () {
    let song = document.getElementById("birthday-song");
    if (song.paused) {
        song.play().catch(error => console.log("Autoplay blocked:", error));
    }
}, { once: true }); // Ensures music starts only once on first click
document.addEventListener("DOMContentLoaded", function () {
    let song = document.getElementById("birthday-song");
    let playButton = document.getElementById("play-music");

    playButton.addEventListener("click", function () {
        song.play().catch(error => console.log("Playback error:", error));
        playButton.style.display = "none"; // Hide button after playing
    });
});
