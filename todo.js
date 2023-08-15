let code = [];

function addHTML(){
    const elementTodo = document.getElementById('lists');
    const elementDate = document.getElementById('date');
    code += `<div class="names">
                <p class="js-list">${elementTodo.value}</p>
                <p class="js-date">${elementDate.value}</p>
                <button class="js-delete" onclick="deleteList(${elementTodo.value})">Delete</button>
            </div>`;
    document.getElementById('addNames').innerHTML = code;
}
function deleteList(list){
    
}