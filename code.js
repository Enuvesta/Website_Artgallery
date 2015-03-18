

var slides = document.getElementsByClassName('slide'),
    count = slides.length,
    n = count;

var current = 0, prev = n - 1, next = 1;

while(n--) {
    slides[n].addEventListener('click', function () {
        
        var slide = slides[prev];
        slide.className = slide.className.replace(' left', ' right');
        prev = current;

        slide = slides[current];
        slide.className += ' left';
        current = next;

        slide = slides[next];
        slide.className = slide.className.replace(' right', '');
        next = (next + 1) % count;

        /*
        if (cname.indexOf('clicked') !== -1) {
            this.className = this.className.replace(' clicked', '');
        } else {
            this.className += ' clicked';
        }
        */
    });
}