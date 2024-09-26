// Isi Form
function validateForm(){
    const name = document.forms["message-input"]["full-name"].value;
    const birthDate = document.forms["message-input"]["birthDate"].value;
    const gender = document.forms["message-input"]["gender"].value;
    const messages = document.forms["message-input"]["messages"].value;

    if (name == ""){
        alert("Nama tidak boleh kosong!");
        return false;

    } else if (birthDate == ""){
        alert("Tanggal Lahir tidak boleh kosong!");
        return false;
    }

    else if (gender == ""){
        alert("pilih salah satu!");
        return false;

    }

    else if (messages == ""){
        alert("Pesan harap diisi!");
        return false;

    }
    
    setSenderUI(name, birthDate, gender, messages); 

    return false;
}

// Menampilkan Form
function setSenderUI(name, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    document.getElementById("name-user").innerHTML = name;
}

document.getElementById("kirim").addEventListener("click", function(){
    validateForm();
})

// Banner Slide
function showSlide(index){
    // Get DOM Semua Image
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);

    // reset indexSlide
    if (index > listImage.length) indexSlide = 1
    
    // Hide All Image
    let i = 0;
    while(i < listImage.length){
        listImage[i].style.display = "none";
        i++;
    }
    
    // Show Selected Image
    listImage[indexSlide - 1].style.display = "block";
    console.log(listImage);
}

function nextSlide(n){
    showSlide(indexSlide += n);
}

// Autorun Banner
setInterval(() => {
    nextSlide(1)
}, 2000);

let indexSlide = 1;
showSlide(1);