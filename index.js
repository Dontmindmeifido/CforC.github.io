function ret(a) {
    return (document.getElementById(`pi${a}`));
}


var curr = 1;

function frw() {
    console.log(curr);
    if (curr <= 9) {
        ret(curr).animate(
            [{ transformOrigin: "0%", transform: `rotateY(${-10+curr}deg)` }, { transformOrigin: "0%", transform: `rotateY(${-159 + curr}deg)` }],
            {
              fill: "forwards",
              easing: "ease-in-out",
              duration: 2000,
            },
          );
        curr++;
    }
}
function bck() {
    if (curr >= 2) {
        ret(curr - 1).animate(
            [{ transformOrigin: "0%", transform: `rotateY(${-159 + curr}deg)` }, { transformOrigin: "0%", transform: `rotateY(${-10+curr}deg)` }],
            {
              fill: "forwards",
              easing: "ease-in-out",
              duration: 2000,
            },
          );
        curr--;
    }
}

window.addEventListener("mousemove", (e) => {
    document.getElementById("view").style.transform = `rotateX(${(-screen.height/2 + e.clientY)/300}deg) rotateY(${(+screen.width/2 - e.clientX)/300}deg)`;
});