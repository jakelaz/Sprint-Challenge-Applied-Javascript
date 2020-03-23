/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselParent = document.querySelector('.carousel-container'),
      carouselData = [
        {
          src: './assets/carousel/mountains.jpeg'
        },
        {
          src: './assets/carousel/computer.jpeg'
        },
        {
          src: './assets/carousel/trees.jpeg'
        },
        {
          src: './assets/carousel/turntable.jpeg'
        }
      ]

function carouselCreator(imgData){
  const carousel = document.createElement('div'),
        leftBtn = document.createElement('div'),
        rightBtn = document.createElement('div'),
        imgsLength = imgData.length - 1
        

  carousel.setAttribute('current-index', 0) 
  carousel.classList.add('carousel')
  leftBtn.classList.add('left-button')
  leftBtn.textContent = ' < '
  rightBtn.classList.add('right-button')
  rightBtn.textContent = ' > '

  carousel.appendChild(leftBtn)
  
  //console.log(imgData)

  imgData.forEach(function (value, i) {
    img = document.createElement('img')
    img.src = value.src
    img.setAttribute("data-index", i);
    if(i == 0){
      img.classList.add('activeImg');
    }
    carousel.appendChild(img); 
  }); 

  carousel.appendChild(rightBtn)

  leftBtn.addEventListener('click', function(){

    let activeImg = document.querySelector('.activeImg'),
        currentIndex = carousel.getAttribute('current-index'),
        newActiveIndex = parseInt(currentIndex) - 1
        
    activeImg.classList.remove('activeImg')
    
    if(currentIndex == 0){
      carousel.setAttribute('current-index', imgsLength) 
      let newActiveImg = document.querySelector(`[data-index='${imgsLength}']`)
      newActiveImg.classList.add('activeImg')
    }else{
      carousel.setAttribute('current-index', newActiveIndex) 
      let newActiveImg = document.querySelector(`[data-index='${newActiveIndex}']`)
      newActiveImg.classList.add('activeImg')
    }
  });

  rightBtn.addEventListener('click', function(){

    let activeImg = document.querySelector('.activeImg'),
        currentIndex = carousel.getAttribute('current-index'),
        newActiveIndex = parseInt(currentIndex) + 1

    activeImg.classList.remove('activeImg')
    
    if(currentIndex == imgsLength){
      carousel.setAttribute('current-index', 0) 
      let newActiveImg = document.querySelector(`[data-index='0']`)
      newActiveImg.classList.add('activeImg')
    }else{
      carousel.setAttribute('current-index', newActiveIndex) 
      let newActiveImg = document.querySelector(`[data-index='${newActiveIndex}']`)
      newActiveImg.classList.add('activeImg')
    }
  });  

  return carousel
}

carouselParent.appendChild(carouselCreator(carouselData));

