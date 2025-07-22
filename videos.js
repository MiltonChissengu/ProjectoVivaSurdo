let listvide = document.querySelectorAll('.video-list .vid'),
    mainVide = document.querySelector('.main-video iframe'),
    titlev = document.querySelector('.main-video .title');

listvide.forEach(iframe => {
    iframe.onclick = () => {
        listvide.forEach(vid => vid.classList.remove('active'));
        iframe.classList.add('active');
          if(iframe.classList.contains('active')) {
            let src = iframe.children[0].getAttribute('src');
            mainVide.src = src;
            let text = iframe.children[2].innerHTML;
            titlev.innerHTML = text;
        };
    };
});
