
import React, { useEffect } from "react";
import { useState } from "react"


const randomNumber = Math.floor((Math.random() * 3) + 1);

export const FirstGamePlay = (props: { state: any }) => {
    const state = props.state

    return(
        <div className="first-phase">
            <div className="image-holder">
            </div>
            
            <div className="images">
                <div className="circle-holder-paper">
                    <div className="paper-image-holder" onClick={()=> state[1](1) }>

                    </div>
                </div>
            </div>
            
            <div className="images-scissors">
                <div className="circle-holder-scissors">
                    <div className="scissors-image-holder" onClick={()=> state[1](2)}>

                    </div>
                </div>
            </div>

            <div className="images-rock">
                <div className="circle-holder-rock">
                    <div className="rock-image-holder" onClick={()=> state[1](3)}>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const SelectedPiece = (   props: { count: any; state: any } ) => { 
    
    const count = props.count,
    state = props.state,
    circlehold = `circle-holder-${state[0]}`,
    img = `images-${state[0]}`,
    [info, setinfo] = useState('');
    const [display, setDisplay] = useState(false),
    houseCircleHolder = `circle-holder-${randomNumber}`,
    houseImage = `images-${randomNumber}`,
    player = useState(''),
    game = useState('');

    function assignValues (){
        switch (state[0]) {
            case 1:
                player[1]('paper')
                break;
            case 2: 
                player[1]('scissors')
                break;
            case 3:
                player[1]('rock')
                break;
            default:
                console.log('value empty')
                break;
        }
    
        switch (randomNumber) {
            case 1:
                game[1]('paper')
                break;
            case 2: 
                game[1]('scissors')
                break;
            case 3:
                game[1]('rock')
                break;
            default:
                console.log('value empt')
                break;
        }
    }
useEffect(() => {
   assignValues()
}, [])
useEffect(() =>{
    if((game[0] === "scissors" && player[0] === "paper")
                || (game[0] === "rock" && player[0] === "scissors") 
                || (game[0] === "paper" && player[0] === "rock") ){
                    
                    setinfo('you lose')
                    count[1](count[0]-1)  

    }else if (( player[0]  === "scissors" && game[0] === "paper") 
                || (player[0] === "rock" && game[0] === "scissors") 
                || (player[0] === "paper" && game[0] === "rock") ) {
                
                    setinfo('you win')
                    count[1](count[0]+1)
    }else if(game[0] === player[0]){
        setinfo(' a draw')    
    }
    else {
            setinfo('there is no match')
}

  setDisplay(true)
  console.log(houseImage)
},[])  

function refactor() {
    state[1](0)
    setinfo('')
    setDisplay(false)
}

    return(
    <> 
         <div className="selected">
            <div className='your-pick'>
                    <h1 className="picked"> you picked</h1>
                    <div className='image-holder'>
                        <div className={circlehold}>
                            <div className={img} >
                            </div>
                        </div>
                    </div>
            </div>
            {
                display ? 
                    <div className="game-pick">{console.log(houseImage)}
                        <h1 className="picked"> the house picked</h1>
                        <div className='image-holder'>
                            <div className={houseCircleHolder}>
                                <div className={houseImage}></div>
                            </div>
                        </div> 
                    </div>
                : <></>
            }
        </div>

        <div className="info-text">
            {info}
        </div>
        { display && 
            <button className="play-again" onClick={() => refactor()}>play again</button>}
    </> 
        )
}


