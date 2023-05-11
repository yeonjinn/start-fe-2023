{/* <div class="count">10</div>
<button>plus</button>
<button>minus</button> */}

const $root=document.getElementById('#root');

function createButton({text='',onClick}){
    const $btn=document.createElement('button');
    $btn.textContent='plus';
    $btn.addEventListener('click',onClick);
    
    return $btn;
}

function createCountWrapper(count=0,className=''){
    const $count=document.createElement('div');
    $count.classList.add(className);
    $count.textContent=count;

    return $count;
}

let count=0;

function plus(){
    console.log('plus');
    document.querySelector('.count').textContent=++count;
}
function minus(){
    console.log('minus');
}

$plusButton=createButton({text:'plus',onClick:plus});
$minusButton=createButton({text:'minus',onClick:minus});

