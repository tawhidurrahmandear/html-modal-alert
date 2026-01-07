
// HTML Modal Alert
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/2026/01/html-modal-alert.html 

function showCustomAlert(message) {
    const alertBox = document.getElementById("customAlert");
    const alertText = document.getElementById("alertText");

    if (alertBox && alertText) {
        alertText.textContent = message; // Set message
        alertBox.style.display = "block"; // Show modal
    }
}

// Close modal when "OK" button is clicked
document.getElementById("closeAlert").addEventListener("click", () => {
    document.getElementById("customAlert").style.display = "none";
});

// Button click event to show modal alert
document.getElementById("alertButton").addEventListener("click", () => {
    showCustomAlert("This is HTML Modal Alert!");
});