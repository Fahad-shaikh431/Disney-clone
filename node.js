let movies = [
  {
    name: "falcon and the Winter Soldier",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis at laboriosm libreo!",


  },
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis at laboriosm libreo!",
    image: "images/slider1.PNG"
  },
  {
    name: "WandaVision",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis at laboriosm libreo!",
    image: "images/slider3.PNG"
  },
  {
    name: "Raya and the Last Dragon",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis at laboriosm libreo!",
    image: "images/slider4.PNG"
  },
  {
    name: "Luca",
    des:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis at laboriosm libreo!",
    image: "images/slider5.PNG"
  }
];

const crousel = document.querySelector('.crousel');
let sliders = [];

let slideIndex = 0;//track the current slide
const createslide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM elemnets
  let slide = document.createElement('div');
  var imgElement = document.createElement('img');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
}
//attaching all the Elements
imgElement.appendchiild(document.createTextNode(''));
h1.appendchiild(document.createTextNode(movies[slideIndex].name));
p.appendchiild(document.createTextNode(movies[slideIndex].des));
content.appendchiild(h1);
content.appendchiild(p);
slide.appendchiild(imgElement);
carousel.appendchiild(slide);

//setting up the images
imgElement.sre = movies[slideIndex].image;
slideIndex++

//setting up the element classnames 
slide.className = "slider";
content.classclassName = "slide-container";
h1.className = "movie-title";
p.className = "movie-des";

slider.path(slide);
if (sliders.length) {
  sliders[0].style.marginleft = 'calc(-${100*(sliders.length-2)}%-${
  30 * (sliders.length - 2)
}px) ';
    )
   }
for (let i = 0; i < 3; i++) {
  createslide();
}
setInterval(() => {
  createslide();
}, 3000);
//video cards
const videocards = [...document.querySelectorAll('video-card')]

videocards.forEach(items => {
  items.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener('mouselever', () => {
    let video = item.children[1];
    video.pause();
  });
});
//card slider





