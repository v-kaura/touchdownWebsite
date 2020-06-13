function sanitizeInput(inputText) {
    return inputText.replace(excludedChars, "_");
}

function submitForm(event) {
    event.preventDefault();

    var nameValue = document.getElementById("userName").value;
    var emailValue = document.getElementById("userEmail").value;
    var phoneValue = document.getElementById("userPhone").value;
    var messageValue = document.getElementById("userMessage").value;

    nameValue = sanitizeInput(nameValue);
    emailValue = sanitizeInput(emailValue);
    phoneValue = sanitizeInput(phoneValue);
    messageValue = sanitizeInput(messageValue);

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
    xhr.open();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var status = xhr.status;
            var formFeedbackMessage = formSuccessfulSubmission;

            if ((status >= 200) && (status < 400)) {
                document.getElementById("userName").value = "";
                document.getElementById("userEmail").value = "";
                document.getElementById("userPhone").value = "";
                document.getElementById("userMessage").value = "";
            }
            else {
                formFeedbackMessage = formFailedSubmission;
            }

            //document.getElementById("formSubmissionFeedback").innerText = formFeedbackMessage;
            alert(formFeedbackMessage);
        }
    }

    xhr.send(requestBodyString);
}

var userForm = document.getElementById("contactForm");
userForm.addEventListener("submit", submitForm);

//const excludedChars = /[^A-Za-z0-9 @\-_.,()+]/g;
const excludedChars = /[<>'"?]/g;

const formSuccessfulSubmission = "The form has been submitted successfully!";
const formFailedSubmission = "There was an error in submitting the form, please try again later.";