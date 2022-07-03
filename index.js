let movies = [
    {
        name: "Yeh Rishta Kya Kehlata Hai",
        des:
            "LATEST EP WILL BE FREE AFTER 3 DAYS. Kartik, Naira and Sirat's daughters are all grown up. Akshara immensely loves Aarohi. But, what happens when they are caught in a love triangle with Abhimanyu?",
        image: "images/slider 2.png"
    },
    {
        name: "laali",
        des:
            "A lonely laundryman from the suburbs of Kolkata finds companionship in an unclaimed red dress, which triggers esoteric memories from the past.",
        image: "images/slider 1.png"
    },
    {
        name: "Anupama",
        des:
            "Despite the many challenges thrown her way, Anupama begins a new chapter of her life post-divorce. Head held always high, what's waiting for her next?",
        image: "images/slider 3.png"
    },
    {
        name: "Doctor Strange in the Multiverse of Madness",
        des:
            "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
        image: "images/slider 4.png"
    },
    {
        name: "lShang-Chi and The Legend of The Ten Rings",
        des:
            "Shang-Chi, a martial arts master, must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        image: "images/slider 5.png"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 500;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 500;
    });
});
