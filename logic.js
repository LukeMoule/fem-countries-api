const themeBtn = document.querySelector(".btn-toggle");
themeBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("theme-light");
    body.classList.toggle("theme-dark");
    const moonIcon = document.querySelector(".fa-moon");
    moonIcon.classList.toggle("fa-regular");
    moonIcon.classList.toggle("fa-solid");
})