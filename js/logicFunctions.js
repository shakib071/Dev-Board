


// card section 

function cardBtn(id) {

    document.getElementById(id).addEventListener('click', function (event) {

        event.preventDefault();//prevent the default action of the form ie default reload
    
        //task assaign section update
        let taskAssaign = document.getElementById('task_assigned');
        
        let taskAssaignValueInt = parseInt(taskAssaign.innerText);
        
    
        taskAssaignValueInt -= 1;
        taskAssaign.innerText = taskAssaignValueInt;

        //task completed section update nav section

        let taskCompleted = document.getElementById('task_completed');

        let taskCompletedValueInt = parseInt(taskCompleted.innerText);
        taskCompletedValueInt += 1;
        taskCompleted.innerText = taskCompletedValueInt;
        

        // History section update

        //parent div

        let historyDiv = document.getElementById('history');
        console.log(historyDiv);

        //child paragraph 

        let historyChild = document.createElement('p');
        historyChild.classList.add('mb-5', 'bg-[#F4F7FF]', 'rounded-xl' , 'p-2')
        
        historyChild.innerText = 'You have Complete The Task Add Dark Mode at 12:48:15 PM';
        historyDiv.appendChild(historyChild);


        

        
    
    });
    
}