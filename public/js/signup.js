let signUp = document.querySelector(".signUpButton");


signUp.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(".signUp").style.display = "flex";
});