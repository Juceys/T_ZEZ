(()=>{new Swiper("#swiper",{slidesPerView:1,centeredSlides:!0,spaceBetween:0,loop:!0,navigation:{nextEl:".reviews__btn-right2",prevEl:".reviews__btn-left2"}});const e=document.querySelector(".burger"),t=document.querySelector(".nav"),r=document.querySelector(".socials");e.addEventListener("click",(function(s){e.classList.toggle("burger__active"),t.classList.toggle("nav__active"),r.classList.toggle("socials__active"),document.body.classList.toggle("_lock")})),document.querySelectorAll(".nav__link").forEach((s=>{s.addEventListener("click",(()=>{e.classList.remove("burger__active"),t.classList.remove("nav__active"),r.classList.remove("socials__active"),document.body.classList.remove("_lock")}))}));const s=document.querySelector(".hero__btn"),l=document.querySelector(".button--close"),o=document.querySelector(".formes");s.addEventListener("click",(()=>{o.classList.toggle("modale__active"),document.body.classList.toggle("_lock")})),l.addEventListener("click",(()=>{o.classList.remove("modale__active"),document.body.classList.remove("_lock")}));const a=document.querySelector(".form").querySelector('input[type="tel"]');new Inputmask("+7 (999) 999-99-99").mask(a),new JustValidate(".form").addField(".input-name",[{rule:"minLength",value:3,errorMessage:"Не менее 3 символов"},{rule:"maxLength",value:30},{rule:"required",value:!0,errorMessage:"Введите имя!"}]).addField(".input-mail",[{rule:"required",value:!0,errorMessage:"Email обязателен"},{rule:"email",value:!0,errorMessage:"Введите корректный Email"}]).addField(".input-tel",[{rule:"required",value:!0,errorMessage:"Телефон обязателен"},{rule:"function",validator:function(){return 10===a.inputmask.unmaskedvalue().length},errorMessage:"Введите корректный телефон"}]).onSuccess((e=>{new FormData(e.target);let t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&console.log("Отправлено"),o.classList.remove("modale__active"),document.body.classList.remove("_lock")},t.open("POST","mail.php",!0),e.target.reset()}))})();