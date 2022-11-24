let cookie = document.querySelector('.cookie')
let cookieBtn = document.querySelector('.cookie-btn')

cookieBtn.addEventListener('click', function(){
   if(cookieBtn){
      cookie.style.display = 'none '
   }
})

new WOW().init();
