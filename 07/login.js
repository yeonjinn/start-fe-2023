const $form=document.querySelector('form');
const $result=document.querySelector('#result');

const id = "hello";
const pw = "world";

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const $id=$form.elements.id.value;
    const $pw=$form.elements.pw.value;

    if(id===$id&&pw===$pw){
        $result.innerText="success";
    }
    else{
        $result.innerText="error"
    }
})