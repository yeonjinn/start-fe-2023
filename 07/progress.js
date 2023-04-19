const $progress=document.getElementById('progress');

let percent=0;
let unit=1;
const doingProgress=()=>{
    if(percent>100||percent<0){
        unit=-unit;
    }
    percent+=unit;
    $progress.style.width=`${percent}%`;
};

setInterval(doingProgress,10);