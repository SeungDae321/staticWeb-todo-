const input = document.querySelector('input');
const add = document.querySelector('.add');
const lists = document.querySelector('.lists');

function constructer(todo){
    let li = document.createElement('li');
    li.innerText = todo;
    lists.appendChild(li)
}

add.addEventListener("click",()=>{
    if(input.value){
        let todo = input.value;
    constructer(todo);
    input.value = '';
    } else{
        alert('할 일이 없나요?')
    }
});

lists.addEventListener('click',(evt)=>{
    let confirmation = confirm("이 일을 지울까요?");
    if(confirmation){
        evt.target.remove();
    } else{
        return;
    }
})

