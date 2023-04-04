var board=document.getElementById("board");
let bordcolor=true;

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(bordcolor ? 'white':'black');
        bordcolor=!bordcolor;
        board.appendChild(cell);

        cell.addEventListener('click',function(){
            cell.classList.toggle('change')
        });
    }

    
    bordcolor=!bordcolor;
}