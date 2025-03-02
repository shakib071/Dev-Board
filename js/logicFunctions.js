//real time function 

function currentTime() {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

   let ans = '';
   let amORPm = ''

   if(hours>12){
         hours = hours - 12;
         amORPm = 'PM';
        if(hours<10){
            hours = '0' + hours;
        }
         ans +=hours;
   }
   else{
         amORPm = 'AM';
         if(hours<10){
              hours = '0' + hours;
         }
         ans += hours;
   }

   if(minutes<10){
       minutes = '0' + minutes;
   }
    ans += ':' + minutes;

    if(seconds<10){
        seconds = '0' + seconds;
    }
    ans += ':' + seconds + ' ' + amORPm;

    return ans;

}



//real date function

function currentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() ;
    let year = date.getFullYear();

    //day name

    let dayNameList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDayName = dayNameList[date.getDay()];
    
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'
                    ,'November', 'December'];
    let currentMonth = monthList[month];
    


    return {
            currentDayName : currentDayName,
            day : day,
            month : currentMonth,
            year : year
        }

}








// card section 

function cardBtn(id,titleid) {

    document.getElementById(id).addEventListener('click', function (event) {

        event.preventDefault();//prevent the default action of the form ie default reload
        alert('Board updated successfully');
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
       

        //child paragraph 

        let historyChild = document.createElement('p');
        historyChild.classList.add('mb-5', 'bg-[#F4F7FF]', 'rounded-xl' , 'p-2');

        //get title 
        let title = document.getElementById(titleid).innerText;
        
        //get current time
        let time = currentTime();
        
        
        historyChild.innerText = `You have Complete The Task ${title} at ${time}`;
        historyDiv.appendChild(historyChild);


        

        //disable the button

        document.getElementById(id).disabled = true;
        document.getElementById(id).classList.add('bg-gray-300');

        //all task done alert message

        if(taskAssaignValueInt === 0){
            alert('Congratulations! you have completed all the current task');
        }
    
    });
    
}


// random color generator

function randomRGBcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}


//day and date in main section

function dayAndDate() {

    let curDate = currentDate();
    

    document.getElementById('day-name').innerText = curDate.currentDayName;
    document.getElementById('date').innerText = `${curDate.month} ${curDate.day}, ${curDate.year}`;

}






