

const show_menu = document.getElementById('show-responsive-menu');
const responsive_menu = document.getElementById('resppo_menu');
let remove = document.getElementById('remove');



show_menu.onclick = () => {
    console.log("hello");

    responsive_menu.style.display = "block";
    responsive_menu.classList.remove('respo-menu-animation-out');
    responsive_menu.classList.add('respo-menu-animation')
}
remove.onclick = () => {
    responsive_menu.classList.remove('respo-menu-animation');
    responsive_menu.classList.add('respo-menu-animation-out');
    responsive_menu.style.display = "none";

}


const about_link = document.getElementById('about_us-mobile');

about_link.onclick = () => {

    responsive_menu.classList.remove('respo-menu-animation');
    responsive_menu.classList.add('respo-menu-animation-out');
    responsive_menu.style.display = "none";
}



var splide = new Splide('#main-carousel', {
    pagination: false,
    arrows:true
    
    
});


var thumbnails = document.getElementsByClassName('thumbnail');
var current;


for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
}


function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
        splide.go(index);
    });
}


splide.on('mounted move', function () {
    var thumbnail = thumbnails[splide.index];


    if (thumbnail) {
        if (current) {
            current.classList.remove('is-active');
        }


        thumbnail.classList.add('is-active');
        current = thumbnail;
    }
});


splide.mount();
