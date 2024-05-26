function registrationForm() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var storage = localStorage.getItem("userData");
    var arr = JSON.parse(storage);

    if (!arr) {
        arr = []
    }

    var userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        number: number.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    }

    arr.push(userData)
    localStorage.setItem("userData", JSON.stringify(arr))

    // window.location.href = "/login.html"
}