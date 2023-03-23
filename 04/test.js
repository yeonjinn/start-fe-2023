const title='jeju';
const url='https://daum.net/'+title;
const url2='https://daum.net/`${title}`'; //왜 안됨

console.log(url2);

const result=[1,2,3].map(item=>item+1);
console.log(result);

const items=[1,2,3,4];
console.log(...items);

function sum(x,y,z){
    return x+y+z;
}

const numbers=[1,2,3];
const [x,y,z]=[...numbers];

console.log(y);

const obj={team:1,area:2};

const team = obj.team;
const area = obj.area;

const {team1,area1}=obj;

const number = 1 ;
const number2=2;
const obj1={number,number2};




