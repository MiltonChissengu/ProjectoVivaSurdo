/* const menu_bar = document.querySelector(".menu-bar"),
      i_menu = document.querySelector(".menu-bar i"),
      menu_cart = document.querySelector(".menu-cart"),
      x2 = document.querySelector(".menu-bar i.bi-x");

menu_bar.addEventListener('click',()=>{
    menu_cart.classList.remove("remove");
});

x2.addEventListener('click',()=>{
    menu_cart.classList.add("remove");
    if(i_menu.classList.contains('bi-x')){
        i_menu.classList.remove('bi-x')
        i_menu.classList.add('bi-list')
    }
}); */

/* x2.addEventListener('click',()=>{
    menu_cart.classList.add("remove");
}); */

function show(){
    const menu_cart = document.querySelector(".menu-cart");
    const i_menu = document.querySelector(".menu-bar i");
    if(menu_cart.classList.contains("remove")){
        menu_cart.classList.remove("remove");
        i_menu.classList.remove("bi-list");
        i_menu.classList.add("bi-x");
        i_menu.style.transition="all .3s";
    }else{
        menu_cart.classList.add("remove");
        i_menu.classList.add("bi-list");
        i_menu.classList.remove("bi-x");
    }
}
