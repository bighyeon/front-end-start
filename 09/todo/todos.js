//start...


var input = document.getElementById('memo');
var form = document.querySelector('.new-task');
var list = document.getElementById('list')


function addTodo(event){
   

    // if(event.keyCode === 13){
    //     var todo = input.value;
    //     console.log(todo);
    // }

    // return false;
    var todo = input.value;
    console.log(todo);
    insertTodo(todo);
    event.preventDefault();
}

form.addEventListener('submit',addTodo);

function insertTodo(todo){

    var html = `<li class= 'dd'>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
  </li> `;

    list.innerHTML += html;
    var dele = document.querySelector('.delete');
    dd(dele);
}
function dd(dele)
{
    dele.addEventListener('click',deletelist);
}



function deletelist(){
    
   list.removeChild(document.querySelector('.dd'));
//    list.removeChild();
}






// input.addEventListener('keydown', addTodo);