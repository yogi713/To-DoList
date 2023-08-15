const listArray = [];

function darkBody(){
    document.querySelector('body').style.background= "#333670";
}

// generateHTML();
function generateHTML(){
    let HTMLcode = '';
    for(let i=0;i<listArray.length;i++){
        const {name} = listArray[i];
        let {dueDate} = listArray[i];
        dueDate = listArray[i].dueDate === '' ? 'No Date': dueDate;
        const html =
                    `
                    <div>${name}</div>
                    <div>${dueDate}</div>
                    <button class="delete" onclick="
                    listArray.splice(${i},1);
                    generateHTML();
                    ">Delete</button>   
                    `;
        HTMLcode += html;
    }
    document.querySelector(".js-add-list").innerHTML = HTMLcode;
}

function addToArray(){
    const name = document.querySelector(".text").value;
    if(name === ''){
        document.querySelector(".text").placeholder = 'Type here to add';
        return;
    }
    const dueDate = document.querySelector(".date").value;
    // const obj = {name: name, dueDate: dueDate};
    const obj = {name, dueDate}; // ShortHand Syntax
    listArray.push(obj);
    document.querySelector(".text").value = '';
    document.querySelector('body').style.background= "#424688";
    generateHTML();
}