
// ==================================
// 1. CREATE GOLDEN BACKGROUND STARS
// ==================================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {

    const star = document.createElement("div");

    star.className = "star-particle";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


// ==================================
// 2. OPEN THE BIRTHDAY SURPRISE
// ==================================

const startBtn = document.getElementById("startBtn");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", function () {

    opening.style.transition = "opacity 1s ease";
    opening.style.opacity = "0";

    setTimeout(() => {

        opening.classList.add("hidden");

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        initializeReveal();

    }, 1000);

});


// ==================================
// 3. SCROLL REVEAL ANIMATIONS
// ==================================

function initializeReveal() {

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        observer.observe(element);

    });

}


// ==================================
// 4. CONFETTI CELEBRATION EFFECT
// ==================================

function createConfetti(amount = 130) {

    const colors = [
        "#e8c77d",
        "#fff0c2",
        "#d9ad60",
        "#ffffff",
        "#b88a3d"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        const size = Math.random() * 7 + 4;

        piece.style.position = "fixed";

        piece.style.width = size + "px";
        piece.style.height = size * 1.5 + "px";

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.borderRadius = "2px";

        piece.style.zIndex = "11000";

        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        const duration = Math.random() * 2500 + 2500;

        const animation = piece.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 1000}deg)`,
                    opacity: 0
                }

            ],

            {
                duration: duration,
                easing: "ease-in"
            }

        );

        animation.onfinish = () => {

            piece.remove();

        };

    }

}


// ==================================
// 5. BIRTHDAY CAKE CELEBRATION
// ==================================

const celebrateBtn = document.getElementById("celebrateBtn");

const cake = document.getElementById("cake");

const cakeMessage = document.getElementById("cakeMessage");

let cakeCelebrated = false;

celebrateBtn.addEventListener("click", function () {

    if (cakeCelebrated) return;

    cakeCelebrated = true;

    cake.textContent = "🎉🎂🎉";

    cakeMessage.textContent =
        "May all your days be filled with happiness, Dad! ❤️";

    celebrateBtn.textContent = "HAPPY BIRTHDAY DAD ❤️";

    createConfetti(180);

});


// ==================================
// 6. FINAL BIRTHDAY SURPRISE
// ==================================

const finalBtn = document.getElementById("finalBtn");

const celebrationOverlay =
    document.getElementById("celebrationOverlay");

const closeCelebration =
    document.getElementById("closeCelebration");

finalBtn.addEventListener("click", function () {

    celebrationOverlay.classList.remove("hidden");

    createConfetti(200);

});

closeCelebration.addEventListener("click", function () {

    celebrationOverlay.classList.add("hidden");

});


// ==================================
// 7. CLOSE OVERLAY WHEN CLICKING OUTSIDE
// ==================================

celebrationOverlay.addEventListener("click", function (event) {

    if (event.target === celebrationOverlay) {

        celebrationOverlay.classList.add("hidden");

    }

});


// ==================================
// 8. KEYBOARD ACCESSIBILITY
// ==================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        celebrationOverlay.classList.add("hidden");

    }

});




window.scrollTo({
    top: 0,
    behavior: "instant"
});