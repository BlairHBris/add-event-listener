const mango = document.querySelector('#mangue');

mango.addEventListener('click', function (event) {
    mango.style.animation = 'spin'
    mango.style.animationDuration = '1s'
    mango.style.animationIterationCount = 5;
    mango.style.animationTimingFunction = 'linear'
})

mango.addEventListener('dblclick', function (event) {
    mango.style.position = 'relative';
    mango.style.left = '0px';
    mango.style.left = parseInt(mango.style.left) + 25 + 'px'
})