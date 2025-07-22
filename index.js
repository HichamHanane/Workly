

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