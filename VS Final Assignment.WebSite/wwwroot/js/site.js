// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".video-container h2");
    let visible = true;

    setInterval(() => {
        heading.style.opacity = visible ? "0.2" : "1";
        visible = !visible;
    }, 800);
});