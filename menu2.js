const menu_bar = document.querySelector(".menu-bar"),
      menu_cart = document.querySelector(".menu-cart"),
      x2 = document.querySelector(".x2");

menu_bar.addEventListener('click',()=>{
    menu_cart.classList.remove("remove");
    x2.addEventListener('click',()=>{
        menu_cart.classList.add("remove");
    });
});
