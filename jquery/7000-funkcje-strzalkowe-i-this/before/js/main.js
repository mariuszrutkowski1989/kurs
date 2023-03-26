$(document).ready(function() {
    
    $('#click-button').click(function(){
        console.log(this);
        console.log($(this));
        //this.style.backgroundColor = 'green';
        $(this).css('background-color', 'green');
    });


    $('#click-button').click((e)=>{

        console.log('Jestem w funkcji strzałkowej');
        console.log(this);
        $(e.target).css('color', 'red');
    });

});

