document.addEventListener("DOMContentLoaded", newFunction);

function newFunction() {
    const navlinks = document.querySelectorAll(".nav-menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    menuOpenButton.addEventListener("click", () => {
        //Toggle mobile menu visibility
        document.body.classList.toggle("show-mobile-menu");
    });
    //Close menu when the close button is clicked
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    //Close menu when a nav link is clicked
    navlinks.forEach((link) => {

        link.addEventListener("click", () => {
            menuOpenButton.click();
        });
    });
}
    