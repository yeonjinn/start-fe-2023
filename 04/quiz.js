//01 문자열 합치기
const year =2022;
const month=11;
const day=03;

const dataString=[year]+'-'+[month]+'-'+[day];

console.log(dataString);

//02 문자열 나누기
const dateString='2022-12-12';
const array2=dataString.split('-')

console.log(array2);

//03 문자열 변경
const text="나는 XX를 좋아해";
const item="JS";

const msg=text.replace("XX",item);

console.log(msg);

//04 문자열 검색
const text4="안녕하세요. 나는 사람입니다.";
const searchText="사람";

console.log(text4.includes(searchText));

//05 모든 배열값 더하기
const point1=[12,34,80,72];
const point2=[1,80,94];

let result5=0;
[...point1,...point2].map(item=>(result5+=item));

console.log(result5);
//point3이 생길수도 있을때 대응..

//06 소수점이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;
console.log(Math.floor(a)+Math.floor(b))


//07 랜덤수 구하기
const min = 1;
const max = 10;
const randomNumber=Math.floor(Math.random()*10);

console.log(randomNumber);


//08 배수 확인
const target = 10;
const num = 3;

if(target%num==0){
    console.log("true");
}else
    console.log("false");


//09 대문자로 변경
const nick = "kakao";

console.log(nick.toUpperCase());

//10 원시타입 요소만 배열로 만들기
const item10 = [1, "a", true, ["a"], { n: 1 }];
const arr10=item10.filter(
    (item)=>typeof item!=='object'&&typeof item!=='fuction'&&typeof item!=='array'
);
console.log(arr10);

//11 배열값 나누기
const item11 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const pad='---'
const result11=[];
item11.forEach((item,index)=>{
    // console.log(`${item}`);
    const isPagePad=((index+1)%pageSize===0)&&index>0;

    if(isPagePad){
        result11.push(item,pad);
    }else
    result11.push(item);
})
const str=result11.join(',');
console.log(str);