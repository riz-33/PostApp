function registrationForm() {
    event.preventDefault();
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    if (firstName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Please Enter Your First Name",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else if (lastName.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Please Enter Your Last Name",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else if (email.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Please Enter Your Email",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else if (number.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Please Enter Your Contact Number",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else if (password.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Please Enter Password",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: "error",
            title: "Password Not Match",
            // text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
    }
    else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${firstName.value + " " + lastName.value} You're Successfully Registered`,
            showConfirmButton: false,
            timer: 1500
        });

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

        setTimeout(() => {
            window.location.href = "/login.html"
        }, 2000)
    }
}
