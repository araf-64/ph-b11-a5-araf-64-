document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggle-btn");

    if (button) {
        button.addEventListener("click", function () {
            if (window.location.pathname.includes("index.html")) {
                window.location.href = "blogs.html"; // Switch to Page 2
            } else {
                window.location.href = "index.html"; // Switch to Page 1
            }
        });
    }
});
