var deviceWidth = document.documentElement.clientWidth || window.innerWidth
if (deviceWidth >= 750) {
    deviceWidth = 750
}
if (deviceWidth <= 320) {
    deviceWidth = 320
}
document.querySelector("html").style.fontSize = (deviceWidth / 10) + 'px';

window.onresize = function () {
    let owidth = (window.innerWidth);
    if (owidth < 500) {
        window.location.href = './m1.html';
    } else if (owidth > 500 & owidth < 800) {
        console.log(owidth);
        window.location.href = './index.html'
    }
}

var lis1 = document.querySelector('.lis1');

function ones() {
    lis1.style.display = 'none';
}

var dls = document.querySelector('.dls');

function tus() {
    dls.style.display = 'none'
}

// 隐藏
$(function () {
    $('.heng').click(function () {
        // 你这写法无敌了。。。。从哪学的写法，JQ用的事hidden();
       $('.mn').toggleClass('nav_show').height('80rem')
    })
})



// function search() {
//     let rigs = document.querySelector('#rights');
//     localStorage.setItem('search_val', rigs.value);
// }

// let kk=localStorage.getItem('search_val');
//     let h3s=document.querySelector('.tent').querySelector('h4')
//     console.log(kk);
//     h3s.innerHTML='与'+kk+'有关的小说';


// let btns=document.querySelector('.right').querySelector('button');

// let h4s=document.querySelector('.tent').querySelector('h4');
// btns.addEventListener('click',function(){
//     h4s.innerHTML=
// })