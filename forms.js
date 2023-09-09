function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const hobbiesInputs = document.querySelectorAll('input[name="hobbies"]:checked');
    const countrySelect = document.getElementById("country");
    const commentsInput = document.getElementById("comments");

    
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Check if at least one gender option is selected
    let genderSelected = false;
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert("Please select a gender.");
        return false;
    }

    // Check if at least one hobby is selected
    if (hobbiesInputs.length === 0) {
        alert("Please select at least one hobby.");
        return false;
    }

    // Check if a country is selected
    if (countrySelect.value === "") {
        alert("Please select a country.");
        return false;
    }

    // Form is valid
    alert("Form submitted successfully!");
    return true;
}