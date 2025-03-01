//divcover to blog page navigation 

document.getElementById('discover').addEventListener('click',
    function () {
        window.location.href = 'blog.html';
    }
);



//card section


cardBtn('card-btn1');
cardBtn('card-btn2');
cardBtn('card-btn3');
cardBtn('card-btn4');
cardBtn('card-btn5');
cardBtn('card-btn6');


// clear history section

document.getElementById('clear-history').addEventListener('click',
    function (event){
        event.preventDefault();
        document.getElementById('history').innerHTML = '';
    }
);