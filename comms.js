function submitForm(event) {
    var nameValue = document.getElementById("userName").value;
    var emailValue = document.getElementById("userEmail").value;
    var phoneValue = document.getElementById("userPhone").value;
    var messageValue = document.getElementById("userMessage").value;

    if (nameValue.length < 1) {
        nameValue = "NoNameProvided"
    }

    if (emailValue.length < 1) {
        emailValue = "NoEmailProvided"
    }

    if (phoneValue.length < 1) {
        phoneValue = "NoPhoneProvided"
    }

    if (messageValue.length < 1) {
        messageValue = "NoMessageProvided"
    }

    var requestBody = {
        userName: nameValue,
        userEmail: emailValue,
        userPhone: phoneValue,
        userMessage: messageValue
    };

    var requestBodyString = JSON.stringify(requestBody);

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", logText);
    xhr.open();

    xhr.send(requestBodyString);

    event.preventDefault();
}

var userForm = document.getElementById("contactForm");
userForm.addEventListener("submit", submitForm);