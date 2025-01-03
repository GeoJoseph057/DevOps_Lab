// scripts.js

// Function to dynamically update the title based on content
document.addEventListener("DOMContentLoaded", function() {
    let pageTitle = document.querySelector("title");
    let headerTitle = document.querySelector(".header-title").innerText;
    if (pageTitle && headerTitle) {
        pageTitle.textContent = headerTitle + " | Marvel Fan Forever";
    }
});

// Smooth Scroll to sections on the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Toggle for showing/hiding sections of the page (like Abstract or Acknowledgements)
function toggleVisibility(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Adding event listeners to buttons for toggling sections
document.getElementById('toggleAbstract').addEventListener("click", function() {
    toggleVisibility('abstractSection');
});

document.getElementById('toggleAcknowledgements').addEventListener("click", function() {
    toggleVisibility('acknowledgementsSection');
});

// Function to change the theme (light/dark mode)
let darkMode = false;

function toggleTheme() {
    let body = document.body;
    if (darkMode) {
        body.style.backgroundColor = "#f5f5f5";
        body.style.color = "#333";
        darkMode = false;
    } else {
        body.style.backgroundColor = "#121212";
        body.style.color = "#f5f5f5";
        darkMode = true;
    }
}

// Adding an event listener to the theme toggle button
document.getElementById('themeToggle').addEventListener("click", function() {
    toggleTheme();
});

// Function to display a message when an image is clicked
document.querySelectorAll("img.round").forEach(img => {
    img.addEventListener("click", function() {
        alert("You clicked on a Marvel-themed image!");
    });
});

// Function to handle YouTube video player API (if video autoplay/pause control is needed)
let videoPlayer = document.querySelector("iframe");

function playVideo() {
    videoPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function pauseVideo() {
    videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

// Event listener for video player controls (if necessary)
document.getElementById('playVideo').addEventListener("click", playVideo);
document.getElementById('pauseVideo').addEventListener("click", pauseVideo);

