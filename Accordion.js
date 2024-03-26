const questions = document.querySelectorAll(".questions");

questions.forEach((questions) => {
    questions.addEventListener("click", () => {
        questions.classList.toggle("active");
    });
});