const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    let lastImgWidth = carousel.querySelectorAll("img")[carousel.querySelectorAll("img").length - 1].clientWidth + 14; // getting last img width & adding 14 margin value

    // Show or hide icons based on scroll position
    arrowIcons[0].style.display = carousel.scrollLeft > 0 ? "block" : "none";
    arrowIcons[1].style.display = carousel.scrollLeft < scrollWidth - lastImgWidth ? "block" : "none";
};



// Add a scroll event listener to the carousel element
carousel.addEventListener('scroll', showHideIcons);


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});







