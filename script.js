// const menu_bar = document.querySelector(".menu-bar"),
//       menu_cart = document.querySelector(".menu-cart"),
//       x2 = document.querySelector(".x2"),
//       section_carrossel = document.querySelector(".section-carrossel");

// menu_bar.addEventListener('click',()=>{
//     menu_cart.classList.remove("remove");
//     x2.addEventListener('click',()=>{
//         menu_cart.classList.add("remove");
//     });
// });


const box = document.querySelector(".carrossel1"),
    imgBox = document.querySelectorAll(".carrossel1 .container1-img");

let contador = 0;

function slider() {
    contador++;

    if (contador > imgBox.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1000}px)`;

}

setInterval(slider, 5000);

// const imag = document.querySelector(".sub-titulo .image");

// imag.addEventListener('click', () => {
//     const fixed = document.querySelector('.fixed');
//     fixed.classList.remove('remove');
//     const x = document.querySelector('.x');
//     x.addEventListener('click', () => {
//         fixed.classList.add('remove');
//     })
// });
