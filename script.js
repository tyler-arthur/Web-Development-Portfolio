// $(".down")

// type writer function
function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 20,
    tempTypeSpeed = 0;

    var type = function() {
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 30;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 30;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

// Active Nav on scroll
const homeEl = $("#homeA");
const homeNav = $("#home-nav");
const aboutEl = $("#aboutA");
const aboutNav = $("#about-nav");
const portfolioEl = $("#portfolioA");
const portfolioNav = $("#portfolio-nav");
const formsEl = $("#formsA");
const formsNav = $("#forms-nav");
// document.addEventListener("scroll", function (){
//     if (homeEl.scrollTop() <= 500) {
//         homeNav.addClass("active");
//         aboutNav.removeClass("active");
//         portfolioNav.removeClass("active");
//         formsNav.removeClass("active");
//     } else homeEl.removeClass("active");
//     if (homeEl.scrollTop() <= 1500) {
//         homeNav.removeClass("active");
//         aboutNav.addClass("active");
//         portfolioNav.removeClass("active");
//         formsNav.removeClass("active");
//     } else aboutEl.removeClass("active");
//     if (homeEl.scrollTop() <= 2500) {
//         homeNav.removeClass("active");
//         aboutNav.removeClass("active");
//         portfolioNav.addClass("active");
//         formsNav.removeClass("active");
//     } else portfolioEl.removeClass("active");
//     if (homeEl.scrollTop() <= 3500) {
//         homeNav.removeClass("active");
//         aboutNav.removeClass("active");
//         portfolioNav.removeClass("active");
//         formsNav.addClass("active");
//     } else formsEl.removeClass("active");
//     console.log("Im Scrollin" + aboutEl.scrollTop());

// })


// Button Changing function
const weather = {
    pic: "https://github.com/tarthurf/Weather-Dashboard/raw/master/weatherdashboard.png",
    link: "https://github.com/tarthurf/Weather-Dashboard"
    }
const planner = {
    pic: "https://github.com/tarthurf/Day-Planner/raw/master/assets/images/day-planner-screenshot.png",
    link: "https://github.com/tarthurf/Day-Planner"
    }
const munchiMaps = {
    pic: "https://github.com/tarthurf/MunchiMaps/raw/master/munchimaps.png",
    link: "https://github.com/tarthurf/MunchiMaps"
    }
const password = {
    pic: "https://github.com/tarthurf/Secure_Password_Generator/raw/master/tarthurf.github.io_Secure_Password_Generator_.png?raw=true",
    link: "https://github.com/tarthurf/Secure_Password_Generator"
    }

function changeImage(imgName) {
    const image = document.querySelector("#project-image > a > img");
    const imageLink = document.querySelector("#project-image > a");
    image.src = imgName.pic;
    imageLink.href = imgName.link
}
changeImage(password)

// Word Rotator on about me
const scroll = $("#word-scroll");
const wordScrollArray = ["Functional", "Minimal", "Beautiful", "Simplicity"] 
function wordScroll() {
    setInterval(() => {
        setTimeout(() => {
            scroll.text(wordScrollArray[0])
        }, 3000);
        setTimeout(() => {
            scroll.text(wordScrollArray[1])
        }, 3000);
        setTimeout(() => {
            scroll.text(wordScrollArray[2])
        }, 3000);
        setTimeout(() => {
            scroll.text(wordScrollArray[3])
        }, 3000);
        scroll.text()
    }, 12000);
}
wordScroll()