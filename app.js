
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