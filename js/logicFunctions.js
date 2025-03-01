


// card section 

function cardBtn(id) {

    document.getElementById(id).addEventListener('click', function (event) {

        event.preventDefault();//prevent the default action of the form ie default reload
    
        let taskAssaign = document.getElementById('task_assigned');
        console.log(taskAssaign);
    
        let taskAssaignValueInt = parseInt(taskAssaign.innerText);
        console.log(taskAssaignValueInt);
    
        taskAssaignValueInt -= 1;
        console.log(taskAssaignValueInt);
    
        taskAssaign.innerText = taskAssaignValueInt;
        
    
    });
    
}