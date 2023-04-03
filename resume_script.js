
const toggle_close = document.getElementById("menu_close");
const toggle_open = document.getElementById("menu_open");
const menu = document.querySelector(".sidenav");
const small_menu = document.querySelector(".smallnav");
const main_cont = document.querySelector(".main");
const container = document.querySelector(".container");

function updateFontSize() {
    const width = window.innerWidth;
    var font_size = width / 40;
    if (width <= 600){
        font_size = width / 25;
    }
    document.documentElement.style.setProperty('--font-size', `${font_size}px`);
}

function updatePictureSize() {
    const img = document.getElementById('profile_pic');
    const height= window.innerHeight;

    img.width = height * 0.25; 
    img.height = height * 0.25;
}

toggle_close.addEventListener("click", function() {
  menu.classList.toggle("hide");
  small_menu.classList.toggle("show");
  main_cont.classList.toggle("fullscreen");
//container.classList.toggle("grow");
});
toggle_open.addEventListener("click", function() {
    menu.classList.toggle("hide");
    small_menu.classList.toggle("show");
    main_cont.classList.toggle("fullscreen");
    // container.classList.toggle("grow");
});

updateFontSize();
updatePictureSize(); 

window.addEventListener('resize', function() {
    updateFontSize();
    updatePictureSize();
});


