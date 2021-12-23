const title = document.querySelector('.title');
let text = title.textContent;

title.childNodes[0].remove();
const textArr = text.split("");

textArr.forEach(function(tx) {
    const span = document.createElement('span');
    span.classList.add('.text')

    span.insertAdjacentText("beforeend", tx);
    title.appendChild(span);

});

gsap.fromTo('span',
{
    top: -30,
    left: 70,
    opacity:0
},

{
    top:0,
    left:0,
    opacity:1,
    stagger: {
       each: 0.015
    }
});