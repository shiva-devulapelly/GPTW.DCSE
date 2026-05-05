 function checkLogin() {
        let user = document.getElementById("username").value;
        let pass = document.getElementById("pass").value;
    
        if (user === "admin" && pass === "1234") {
            return true;   
        } else {
            alert("Invalid Login");
            return false;  
        }
    }