function checkLogin() {

    let user = document.getElementById("username").value.trim().toLowerCase();
    let pass = document.getElementById("pass").value.trim();

    if (user === "admin" && pass === "1234") {
        return true; // allow redirect
    } else {
        alert("Invalid Login");
        return false; // stop form
    }
}