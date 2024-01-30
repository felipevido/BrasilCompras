
$(document).ready(function () {
  $(".hamburguer").click(function () {
    $(this).toggleClass("hamburguer-active");
    $(".nav-list-mobile").toggleClass("active");
  });
});

$(window).scroll(function() {
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

      var scroll = $window.scrollTop() + ($window.height() / 3);
      $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > 
        scroll) {
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join('');
          });
          $body.addClass('color-' + $(this).data('color'));
        }
      });
}).scroll();

function rotate(){
  let show = document.querySelector(".mask span[data-show]");
  let next = show.nextElementSibling || document.querySelector(".mask span:first-child");
  let up = document.querySelector(".mask span[data-up]");

  if(up) {
    up.removeAttribute("data-up");
  }

  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  next.setAttribute("data-show", "");
}

setInterval(rotate, 2000);


window.addEventListener('scroll', ()=> {
  let content = document.querySelector('.zoomText');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('activeZoom');
  }
  else {
    content.classList.remove('activeZoom');
  }
});

window.addEventListener('scroll', ()=> {
  let content = document.querySelector('.zoomText1');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('activeZoom');
  }
  else {
    content.classList.remove('activeZoom');
  }
});

window.addEventListener('scroll', ()=> {
  let content = document.querySelector('.zoomText2');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('activeZoom');
  }
  else {
    content.classList.remove('activeZoom');
  }
});

window.addEventListener('scroll', ()=> {
  let content = document.querySelector('.zoomText3');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('activeZoom');
  }
  else {
    content.classList.remove('activeZoom');
  }
});

window.addEventListener('scroll', ()=> {
  let content = document.querySelector('.zoomText4');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('activeZoomLed');
  }
  else {
    content.classList.remove('activeZoomLed');
  }
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample2)

    toast.show()
  })
}

const toastTrigger3 = document.getElementById('liveToastBtn3')
const toastLiveExample3 = document.getElementById('liveToast3')
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample3)

    toast.show()
  })
}

// SCROLL VIDEO ANIMATION 1

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 40000,
  triggerElement: intro,
  triggerHook: 0
})

  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnimZoom = TweenMax.fromTo(text, 3, { scale: 1 }, { scale: 1.5 });


let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnimZoom)
    .addTo(controller);


//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 1;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;  
}, 33.3);
