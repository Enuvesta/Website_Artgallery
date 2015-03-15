

var slides = document.getElementsByClassName('slide'),
    n = slides.length;

while(n--) {
    slides[n].addEventListener('click', function () {
        var cname = this.className;
        if (cname.indexOf('clicked') !== -1) {
            this.className = this.className.replace(' clicked', '');
        } else {
            this.className += ' clicked';
        }
    });
}