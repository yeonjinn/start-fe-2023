// // const a = 'a';
// // console.log(a);
// // a='11';
// // console.log(a);

// //array create

// const todos =['운동'];

// const todo ='공부';
// todos.push(todo);
// console.log(todos);

// //read

// todos.forEach(function(todo){
//     console.log(todo);
// })

// const updateTodo='공부';

// const updateIndex=todos.findIndex(function(todo){
//     return todo === updateTodo;
// });
// todos[updateIndex]='게임';

// const newTodos = todos.map(function(todo){
//     if(todo===updateTodo){
//         return '게임';
//     }
//     return todo;
// });
// console.log(newTodos);

// function test(){
//     console.log('test()');
// }

// var id=setTimeout(test,1000); //1초 후 1번 실행
// var id=setInterval(test,1000); //1초마다 계속 실행

// function test(){
//     console.log('test()');
//     setTimeout(test,1000);
// }


// var sum=0;

// while(count!==null){
//     var count=window.prompt('숫자를 입력하세요');
//     sum+=parseInt(count);

//     console.log(sum);
// }

// var count=[10,20,30,40,50,60,70,100]

// const sum=count.reduce(function(sum,currValue){
//     return sum+currValue;
// },0);

// const avg=sum/count.length;

// console.log(avg);

function gugudan(a){
    for(let i=1;i<=9;i++){
        console.log(a+'*'+i+'='+(a*i));
    }
}
// console.log(gugudan(1));
