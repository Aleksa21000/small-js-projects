let text = document.querySelector('.title').textContent;
const title = document.querySelector('.title');

const textArr = text.split("");
textArr.forEach(function(tx) {
    const span = document.createElement('span');
    span.classList.add('.text')

    span.insertAdjacentText("beforeend", tx);
    title.appendChild(span);

});
title.childNodes[0].remove();


gsap.fromTo('span',
{
    top: -30,
    left: 30,
    opacity:0
},

{
    top:0,
    left:0,
    opacity:1,
    stagger: {
       each: 0.02
    }
});