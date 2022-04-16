
import React, { useEffect } from "react";
import { useState } from "react"


function randomGenerator(){
   return Math.floor((Math.random() * 3) + 1);
}

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
    randomNumber = randomGenerator,
    state = props.state,
    circlehold = `circle-holder-${state[0]}`,
    img = `images-${state[0]}`,
    [info, setinfo] = useState('');
    const [display, setDisplay] = useState(false),
    houseCircleHolder = `circle-holder-${randomNumber()}`,
    houseImage = `images-${randomNumber()}`;

useEffect(() =>{
    if( (state[0] ===3 && randomNumber() === 1) || (state[0] === 1 && randomNumber() === 2) || (state[0] === 2 && randomNumber() === 3)  ){
                    setinfo('you lose')
                    count[1](count[0]--)
    }else if ( (state[0] === 1 && randomNumber() === 3) || (state[0] === 2 && randomNumber() === 1) || (state[0] === 3 && randomNumber() === 2)  ) {
                    setinfo('you win')
                    count[1](count[0]--)
    }else if(state[0] === randomNumber){
        setinfo(' a draw')    
    }
    else {
            setinfo('there is no match')
}

  setDisplay(true)
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
                    <div className="game-pick">
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


