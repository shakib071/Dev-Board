

//random baground color 

document.getElementById('random-bg-color').addEventListener('click',
    function (){
        let color = randomRGBcolor();

        console.log(color);

        //header section color change
        document.getElementById('header').classList.add(`bg-[${color}]`);

        //main section color change

        document.getElementById('main-section').classList.add(`bg-[${color}]`);

      
        
    }
);



//divcover to blog page navigation 

document.getElementById('discover').addEventListener('click',
    function () {
        window.location.href = 'blog.html';
    }
);



//card section


cardBtn('card-btn1','card-title1');
cardBtn('card-btn2','card-title2');
cardBtn('card-btn3','card-title3');
cardBtn('card-btn4','card-title4');
cardBtn('card-btn5','card-title5');
cardBtn('card-btn6','card-title6');


// clear history section

document.getElementById('clear-history').addEventListener('click',
    function (event){
        event.preventDefault();
        document.getElementById('history').innerHTML = '';
    }
);




