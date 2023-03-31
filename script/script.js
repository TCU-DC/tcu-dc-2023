'use strict';

const d = document;
let audio = new Audio();

function moveNewsContent() {
    const newsFrame = d.getElementById('news-items-wrapper');
    let contents = newsFrame.getElementsByClassName("news-item");
    let area = [
        newsFrame.getElementsByClassName(`area0`)[0],
        newsFrame.getElementsByClassName(`area1`)[0],
        newsFrame.getElementsByClassName(`area2`)[0],
        newsFrame.getElementsByClassName(`area3`)[0],
        newsFrame.getElementsByClassName(`area4`)[0],
        newsFrame.getElementsByClassName(`area5`)[0]
    ];
    for (let i = 0; i <= 5; i++) {
        area[i].classList.add(`area${i+1}`);
        area[i].classList.remove(`area${i}`);
    }

    if(area[0].previousElementSibling) {
        area[0].previousElementSibling.classList.add("area0");
    } else {
        contents[contents.length-1].classList.add("area0");
    }

    if(newsFrame.getElementsByClassName(`area6`)[0])newsFrame.getElementsByClassName(`area6`)[0].classList.remove(`area6`);
}

setInterval(moveNewsContent, 5000);
setNewsContentArea();
function setNewsContentArea() {
    const contents = d.getElementById('news-items-wrapper').getElementsByClassName("news-item");
    for (let i = 0; i < 6; i++) {
        contents[i].classList.add(`area${i}`)
    }
}

function contentNavSelector(n) {
    const targetFrame = d.getElementById('js-content-nav');
    targetFrame.getElementsByClassName("select")[0].classList.remove("select");
    targetFrame.children[n].classList.add("select");
}

document.getElementById("dtm-play").addEventListener("mouseover",() => {
    audio.src = `./works/dtm/${Math.floor(Math.random()*4)}.mp3`;
    audio.play();
})

document.getElementById("dtm-play").addEventListener("mouseout", () => {
    audio.pause();
})

function player(n) {
    if(d.getElementsByClassName("dtm-play")&&!event.target.parentNode.classList.contains("dtm-playing")) {
        audio.src = `./works/dtm/${n}.mp3`;
        audio.play();
        const previous = d.getElementsByClassName("dtm-playing");
        for (let i = 0; i < previous.length; i++) {
            previous[i].classList.remove("dtm-playing");
        }
        event.target.parentNode.classList.add("dtm-playing");
    } else {
        audio.pause();
        event.target.parentNode.classList.remove("dtm-playing");
    }
}

function link(path) {
    window.open(path,"_blank");
}

function pageScroll(path) {
    scrollTo({
        top: (d.getElementById(`scroll-${path}`).getBoundingClientRect().top - d.getElementById("header").clientHeight*1.2),
        behavior: 'smooth'
    });
}