document.addEventListener("DOMContentLoaded", function() {
    let num = document.getElementById('num');
    let images = document.getElementsByTagName('img');
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        timeout = setTimeout(function() {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.classList.remove('image');
                    num.innerHTML = `${images.length - document.getElementsByClassName('image').length}`;
                    lazyImage.src = lazyImage.dataset.src;
                    if (document.getElementsByClassName('image').length == 0) {
                        let label = document.getElementById('msg');
                        label.style.background = '#A6EB9A';
                        setTimeout(function() { label.style.display = 'none'; }, 3000);
                    }
                }
            })
        }, 200);
    });
    const arr = document.querySelectorAll('img.image')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})