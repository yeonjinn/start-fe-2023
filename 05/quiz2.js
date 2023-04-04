var board=document.getElementById("board");
let bordcolor=true;
let select=null;

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(bordcolor ? 'white':'black');
        bordcolor=!bordcolor;
        board.appendChild(cell);

        cell.addEventListener('click',function(){
            if(select){
                select.classList.remove('change')
            }
            select=cell;
            select.classList.add('change');
        });
        board.appendChild(cell);
    }

    
    bordcolor=!bordcolor;
}