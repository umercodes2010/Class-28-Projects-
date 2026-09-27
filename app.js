// Change Profile Information

function changeProfile() {

    document.getElementById("profileHeading").innerHTML =
        "Welcome to My New Profile";

    document.getElementById("profileName").innerHTML =
        "Areeb Ahmed";

    document.getElementById("profileRole").innerHTML =
        "Full Stack Developer";

    document.getElementById("profileDescription").innerHTML =
        "I am a full stack developer who enjoys building modern and interactive web applications.";
}


// Change Profile Image

function changeImage() {

    document.getElementById("profileImage").src =
        "https://i.pravatar.cc/250?img=32";
}


// Mouseover Event

function imageOver() {

    document.getElementById("profileImage").style.transform =
        "scale(1.15)";

    document.getElementById("profileImage").style.borderRadius =
        "20px";
}


// Mouseout Event

function imageOut() {

    document.getElementById("profileImage").style.transform =
        "scale(1)";

    document.getElementById("profileImage").style.borderRadius =
        "50%";
}


// User Input

function showName() {

    var name = document.getElementById("userName").value;

    if (name == "") {

        document.getElementById("welcomeMessage").innerHTML =
            "Please enter your name.";

    } else {

        document.getElementById("welcomeMessage").innerHTML =
            "Welcome, " + name + "! 👋";
    }
}


// Bonus Feature

function changeDescription() {

    document.getElementById("profileDescription").innerHTML =
        "⭐ You discovered the bonus feature! Keep learning JavaScript and DOM.";
}