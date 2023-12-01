
var owl = $('.slide-one');
owl.owlCarousel({
  center: false,
  loop: true,
  margin: 20,
  items: 1,
  responsive: {
    450: {
      items: 2,
    },
    841: {
      items: 3,
      center: true,
    }
  },
});
// Go to the next item
$('.arrow-right').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.arrow-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})


$(document).ready(function(){
  $(".slide-two").owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      autoplay:true, //Автозапуск слайдера
      smartSpeed:2000, //Время движения слайда
      autoplayTimeout:5000, //Время смены слайда
      zindex: 0,
      responsive: {
        450: {
          items: 2,
        },
        900: {
          items: 3,
        }
      },
  });
});


const links = document.querySelectorAll(".link-serf");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

// Menu
function openModal() {
  document.getElementById("modal").style.top = "0px";
}
function closeModal() {
  document.getElementById("modal").style.top = "-400px";
}



// Yandex.Metrika counter
(function (d, w, c) {
  (w[c] = w[c] || []).push(function() {
      try {
          w.yaCounter32285759 = new Ya.Metrika({
              id:32285759,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
          });
      } catch(e) { }
  });

  var n = d.getElementsByTagName("script")[0],
      s = d.createElement("script"),
      f = function () { n.parentNode.insertBefore(s, n); };
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://mc.yandex.ru/metrika/watch.js";

  if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
  } else { f(); }
})(document, window, "yandex_metrika_callbacks");



// читать далее
function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display == "inline") {
      btnText.innerHTML = "Читать далее";
      moreText.style.display = "none";
  } 
  else {
      btnText.innerHTML = "Скрыть";
      moreText.style.display = "inline";
  }
}