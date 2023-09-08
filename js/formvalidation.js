function formValidation() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var checkbox = document.getElementById("checkbox");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;
    var namePattern = /^[A-Za-z ]+$/;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter your name";
        return false;
    } else if (!namePattern.test(name)) {
        document.getElementById("nameError").innerHTML = "Name must contain only letters";
        return false;
    } else {
        document.getElementById("nameError").innerHTML = '';
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Enter your email";
        return false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter your valid email";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = '';
    }

    if (phone == "") {
        document.getElementById("phoneError").innerHTML = "Enter your phone number";
        return false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter your valid phone number";
        return false;
    } else {
        document.getElementById("phoneError").innerHTML = '';
    }

    if (location == "") {
        document.getElementById("locationError").innerHTML = "Enter your location";
        return false;
    } else {
        document.getElementById("locationError").innerHTML = "";
    }

    if (subject == "") {
        document.getElementById("subjectError").innerHTML = "Enter your subject";
        return false;
    } else {
        document.getElementById("subjectError").innerHTML = '';
    }
    if (message == "") {
        document.getElementById("msgError").innerHTML = "Enter you message";
        return false;
    } else {
        document.getElementById("msgError").innerHTML = '';

    }

    if (!checkbox.checked) {
        alert("Please agree to the terms and condition");
        return false;
    }
    return true;


}