// console.log(window.outerWidth);
// console.log(window.name);

// window.open("http://www.daum.net");

// location.reload(); 

// window.location

// history.back();
// history.forward();

// screen.width
// screen.availWidth

// navigator.userAgent

// //탐색
// var debug=document.getElementById('debug');

// var box=document.querySelector('.box');
// console.log(box);

//생성
// var div=document.createElement('div');
// div.style.border='1px solid=#000';
// div.innerHTML='Hello!';

// document.body.appendChild(div);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// var debug=document.getElementById('debug');
// debug.remove();

// var clickCount=0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments,event,event.type,event.currentTarger);
// }
// document.body.addEventListener('click', popup);

var list = document.querySelector('#list');
console.log(list.children);

for(var i=0;i<list.children.length;i++){
    list.children[i].addEventListener('click',function(){
        console.log(1);
    });
}