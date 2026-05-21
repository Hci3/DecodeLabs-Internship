const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Min 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (valid) {
        document.getElementById("successMsg").textContent = "Form submitted successfully!";
        form.reset();
    }
});