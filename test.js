'use strict';

alert("hello welcome to my website");

let score = 0;
score+=1;

function q1(){
    let username = prompt("it is my name omar?");

if (username !== null){
    username = username.toLowerCase();
    
}

    switch (username) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;

        case 'no':
            console.log('it\'s false answer');
            alert("false answer");
            break;

            default:
            alert("please answer yes or no ");
    
}

}
q1();
 


function q2(){
    let age = prompt("is my age is 20?");
 
 if (age !== null){
    age = age.toLowerCase();
}
    switch (age) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;

        case 'no':
            console.log('it\'s false answer');
            alert("false answer");
            break;

            default:
            alert("please answer yes or no ");
    }
}
 q2();


function q3(){
  let username2 = prompt("is my fav sport is football");
  if ( username2 !== null){
    username2 = username2.toLowerCase();
}
    switch (username2) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;

        case 'no':
            console.log('it\'s false answer');
            alert("false answer");
            break;

            default:
            alert("please answer yes or no ");
    }
}
q3();


function q4(){
    let mansaf = prompt("is my fav food is mansaf");
if ( mansaf !== null){
    mansaf = mansaf.toLowerCase();
}
    switch (mansaf) {
        case 'yes':
            console.log('true answer');
            alert("true answer");
            score+=1;
            break;

        case 'no':
            console.log('it\'s false answer');
            alert("false answer");
            break;

            default:
            alert("please answer yes or no ");
    }
}
q4();



function q5 (){
    let ask = prompt("did i love this course :)");
    if ( ask !== null){
        ask = ask.toLowerCase();
    }
        switch (ask) {
            case 'yes':
                console.log('true answer');
                alert("true answer");
                score+=1;
                break;
    
            case 'no':
                console.log('it\'s false answer');
                alert("false answer");
                break;
    
                default:
                alert("please answer yes or no ");
        }

}

q5();



function q6(){
        alert("let'/s play a game can you guess a number i choies it");
        let guessnumber ;

        for ( let i=0 ; i<4 ;i++){
        let guessnumber = Number(prompt('enter a guessnumber :  '));

            if (guessnumber === 15) {

                alert(" yes that's a correct answer");
                console.log('yes that\'s a correct amswer' +guessnumber);
                alert("correct answer");
                score+=1;
                break;
            }else if (guessnumber > 15)
               {
                alert(" its too high");
                alert("pick another number");
                
                

            }else if (guessnumber < 15){

                alert(" its too low");
                alert("pick another number");
                
        
            }
            
        }
                alert("the correct number is 15");
}
q6();
        

 function q7(){
        
    let place = ['lebnon','egypt','london','palstine','italy','germany','spain','iraq','kuwait','syria'];
    // let travel = prompt("can you guess the country i would like to visit it");
    
    for(let x =0 ; x<6 ; x++){

        let travel = prompt("can you guess the country i would like to visit it");
        let y;
    for ( y = 0; y<place.length ; y++){
        
            if (travel === place[y]){

                alert('correct answer');
                
                console.log('true i would like to visit this country ' + travel);
                score+=1;
                break;

            }
          
        
       
        }
        if(travel === place[y]){
            break;

        }else{
            alert('incorrect');
        }
        
    }

 }
  
q7();
            
alert("that's a correct answer");
function get_score(){
            alert("scores is " + score + "out of 7");

}
get_score();            

            

        
            
        
        
        
        

        
        
        
  
