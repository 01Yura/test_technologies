// Функция для анимации прокрутки к разделу по его id
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}

// Добавляем обработчики событий для кнопок навигации по сайту
document.getElementById("nav-about-me").addEventListener("click", function() {
    scrollToSection("about-me");
});

document.getElementById("nav-education").addEventListener("click", function() {
    scrollToSection("education");
});

document.getElementById("nav-experience").addEventListener("click", function() {
    scrollToSection("experience");
});

document.getElementById("nav-skills").addEventListener("click", function() {
    scrollToSection("skills");
});
