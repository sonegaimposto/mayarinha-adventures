const mayara = document.querySelector(".mayara");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mayara.classList.add("jump");

    setTimeout(() => {
        mayara.classList.remove("jump");
    }
    ,500);
}

const loop = setInterval (() => ());





















document.addEventListener("keydown", jump);