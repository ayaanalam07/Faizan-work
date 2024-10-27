function toggleMenu() {
    const mobileNav = document.getElementById("mobile-menu");
    if (mobileNav.style.width === "0px" || mobileNav.style.width === "") {
        mobileNav.style.width = "100%"; 
    } else {
        mobileNav.style.width = "0"; 
    }
}

