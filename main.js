const mayara = document.querySelector(".mayara");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mayara.classList.add("jump");

    setTimeout(() => {
        mayara.classList.remove("jump");
    }
    ,500);
}

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const mayaraPosition = +window.getComputedStyle(mayara).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && mayaraPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mayara.style.animation = "none";
        mayara.style.left = `${mayaraPosition}px`;

        mayara.src = "./img/game-over.png";
        mayara.style.width = "75px";
        mayara.style.marginLeft = "50px";

        clearInterval(loop);
    }
},10);

document.addEventListener("keydown", jump);
