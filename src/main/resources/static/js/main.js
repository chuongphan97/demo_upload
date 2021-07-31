'use strict';

let singleUploadForm = document.querySelector('#singleUploadForm');
let singleFileUploadInput = document.querySelector('#singleFileUploadInput');

function uploadSingleFile(file) {
    let formData = new FormData();
    formData.append("file", file);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadFile");
    xhr.send(formData);
}

singleUploadForm.addEventListener('submit', function(event){
    let files = singleFileUploadInput.files;
    $("#imageName").val(files[0].name);
    uploadSingleFile(files[0]);
    event.preventDefault();
}, true);


function saveFilm(){
    $(".upload").click();

    let film = {
        name : $("#filmName").val(),
        image: $("#imageName").val()
    }
    console.log(film)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "/film/saveFilm",
        data: JSON.stringify(film)
    }).done(function (film){
        alert(`Tạo mới film ${film.name} thành công!`)
    })
}

$(".create-btn").on("click", function (){
    saveFilm();
})
