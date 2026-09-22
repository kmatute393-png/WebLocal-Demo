console.log("🌹 La rosa ha florecido...");

const rose = document.querySelector(".rose");

rose.addEventListener("click", () => {

    document.querySelector(".message h1").textContent =
        "Para alguien especial ❤️";

});