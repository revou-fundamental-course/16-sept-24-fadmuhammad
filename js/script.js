function validateForm(){
    const name = document.forms["message-form"]["name-input"].value;
    const birthDate = document.forms["message-form"]["birthDate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("tidak boleh kosong!");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages); 

    return false;
}

function setSenderUI(name, birthDate, gender, messages){
    document.getElementById("sender-name-input").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function replaceName(){
    var nameInput = prompt("masukkan nama anda", "")
    document.getElementById("name").innerHTML = nameInput
}

document.getElementById("kirim").addEventListener("click", function(){
    replaceName();
    validateForm();
})