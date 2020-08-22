// Constants
const defaultNameValue = "NoNameProvided"
const defaultEmailValue = "NoEmailProvided"
const defaultPhoneValue = "NoPhoneProvided"
const defaultMessageValue = "NoMessageProvided"

const excludedChars = /[<>'"?]/g;

const formSuccessfulSubmission = "The form has been submitted successfully!";
const formFailedSubmission = "There was an error in submitting the form, please try again later.";

//Functions
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
        nameValue = defaultNameValue
    }

    if (emailValue.length < 1) {
        emailValue = defaultEmailValue
    }

    if (phoneValue.length < 1) {
        phoneValue = defaultPhoneValue
    }

    if (messageValue.length < 1) {
        messageValue = defaultMessageValue
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

            alert(formFeedbackMessage);
        }
    }

    xhr.send(requestBodyString);
}

var userForm = document.getElementById("contactForm");
userForm.addEventListener("submit", submitForm);