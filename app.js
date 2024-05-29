
var backgroundImage = "";

function addPost() {
    var title = document.getElementById("title");
    var description = document.getElementById("description")

    if (title.value.trim() && description.value.trim()) {

        var posts = document.getElementById("posts");
        posts.innerHTML += `
        <div class="card p-4">
        <div class="card-header"> Post </div>
        <div style="background-image: url(${backgroundImage})" class="card-body">
        <blockquote class="blockquote mb-1">
        <p> ${title.value} </p>
        <footer class="blockquote-footer"> ${description.value} </footer>
        </blockquote>
        </div>
        </div>
        `

        title.value = "";
        description.value = "";

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Title & Description!",
        });
    }
}

function selectImage(src) {
    backgroundImage = src;
    var bgImage = document.getElementsByClassName("bg-image");
    for (var i = 0; i < bgImage.length; i++) {
        bgImage[i].className = "bg-image"
    }
    event.target.className += " images-list-selected"
}

function getData(){
    var profile = document.getElementById ("profile");
    var localData = JSON.parse (localStorage.getItem("userData"))
    console.log (localData)
    profile.innerHTML = `
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li >Full Name : ${localData.firstName}
        // <a class="nav-link" aria-current="page" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Email ID:</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Phone Number:</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Log Out</a>
      </li>
  </div>

    `
}

getData()