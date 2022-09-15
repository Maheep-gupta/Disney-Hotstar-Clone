let movies = [
    // 1
    {
        name: "Loki",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque, praesentium iste reprehenderit fugit est? Dolorem quis temporibus eligendi harum soluta at sed. Doloremque, earum",
        image: "images/slider1.PNG"

    },
    //2
    {
        name: "The Falcon and the Winter Solider",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque, praesentium iste reprehenderit fugit est? Dolorem quis temporibus eligendi harum soluta at sed. Doloremque, earum",
        image: "images/slider2.PNG"

    },
    //3
    {
        name: "Wanda Vison",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque, praesentium iste reprehenderit fugit est? Dolorem quis temporibus eligendi harum soluta at sed. Doloremque, earum",
        image: "images/slider3.PNG"

    },
    //4
    {
        name: "Raya the last dragon",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque, praesentium iste reprehenderit fugit est? Dolorem quis temporibus eligendi harum soluta at sed. Doloremque, earum",
        image: "images/slider4.PNG"

    },//5
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque, praesentium iste reprehenderit fugit est? Dolorem quis temporibus eligendi harum soluta at sed. Doloremque, earum",
        image: "images/slider5.PNG"

    }

];
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;//track current slide


const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;

    }
    //DOM
    const slide = document.createElement('div');
    var imgEle = document.createElement('img');
    const content = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');





    imgEle.appendChild(document.createTextNode(''));



    h1.appendChild(document.createTextNode(movies[slideIndex].name));

    p.appendChild(document.createTextNode(movies[slideIndex].des));


    content.appendChild(h1);
    content.appendChild(p);


    slide.appendChild(content)
    carousel.appendChild(slide)
    slide.appendChild(imgEle)








    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    imgEle.src = movies[slideIndex].image;
    slideIndex++;





    sliders.push(slide);

    if (sliders.length) {

        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
};



for (let index = 0; index < 5; index++) {
    createSlide();

}
setInterval(() => {
    createSlide();
}, 3000)


const videoCards = [...document.querySelectorAll('.video-card')]
videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})



let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];


cardContainers.forEach((items, i) => {
    let containerDimension = items.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtns[i].addEventListener('click',()=>{
        items.scrollLeft+=containerWidth-200;
    })


    preBtns[i].addEventListener('click',()=>{
        items.scrollLeft-=containerWidth+200;
    })



})