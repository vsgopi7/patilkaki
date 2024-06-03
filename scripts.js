document.getElementById("getStartedBtn").addEventListener("click", function() {
    const heroSection = document.getElementById("hero");
    const heroSectionHeight = heroSection.getBoundingClientRect().height;
    window.scrollBy({
        top: heroSectionHeight,
        behavior: "smooth"
    });
});


var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector("header");
    
    if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
        // Scroll down
        header.classList.add("hidden"); // Hide header
    } else {
        // Scroll up
        header.classList.remove("hidden"); // Show header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);


document.getElementById("getStartedBtn").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
