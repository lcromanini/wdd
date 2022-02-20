const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload = () => {
        image.removeAttribute("data-src")
        image.className = "in"
    };
};


const options = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    imagesToLoad.forEach((image) => {
        observer.observe(image)
    })
}
else {
    imagesToLoad.forEach((image) => {
        loadImages(image)
    })
}