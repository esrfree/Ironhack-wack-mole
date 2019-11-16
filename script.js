console.log('hello');

window.onload = function(){

    let mole = document.createElement('div');
    mole.classList.add('mole');
    let currentScore = 10;


    function randomMole() {

        mole.remove();

        let randomTime = (Math.floor(Math.random() * 2000)) + 200 ;
        let randomPos = Math.floor(Math.random() * document.getElementsByClassName('col').length);
        // array of position inside the matrix
        let squares = document.getElementsByClassName('col')

        if ( randomTime > 1800) {
            setTimeout(randomMole, randomTime)
            return;
        }        
        
        // inserting the mole at random positions
        squares[randomPos].append(mole);

        // calling again the function after certain time
        setTimeout(randomMole, randomTime)
    }

    function score( ev ) {
       if ( ev.target.className == mole.className ) {
            currentScore++;
            mole.remove();
            if (currentScore > 15) {
                alert( `You win, you can start again`)
                currentScore = 10;
                return;
             }
            console.log( currentScore )
       }
       else if( ev.target.className !== mole.className ) {
           currentScore--;
           if (currentScore == 0) {
               alert( `You lose, now you have 10 pts again to play with`)
               currentScore = 10;
               return;
            }
            console.log( currentScore)
        }
        
    }
 
    randomMole()
    //mole.onclick = score;
    window.onclick = score;
    
 
    console.log(document.getElementById('game-board'))

}// end window onload