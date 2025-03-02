const button = document.getElementById("toggle-btn");

    if (button) {
        button.addEventListener("click", function () {
            if (window.location.pathname.includes("index.html")) {
                window.location.href = "blogs.html";
            } else {
                window.location.href = "index.html";
            }
        });
    }
