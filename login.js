function loginForm() {
    event.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var login = JSON.parse(localStorage.getItem('userData'));

    if (!login) {
        Swal.fire({
            icon: "error",
            title: "User Not Found",
        })
        setTimeout(() => {
            window.location.href = "/index.html"
        }, 2000)
    };

    if (login.email !== email.value) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
        })
    }
    else if (login.password !== password.value) {
        Swal.fire({
            icon: "error",
            title: "Invalid Password",
        })
    }
    else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${login.firstName + " " + login.lastName} Successfully Login`,
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.href = "/post.html"
        }, 2000)
    }
}
