import {  ReactChild, ReactFragment, ReactPortal, useState } from "react"
import { FirstGamePlay, SelectedPiece } from "./gameLogics"

const Header = ( props: { count: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
    const PrevCount = localStorage.getItem('count')

    return(
        <header className="top-head">
            <div className="header">
                <nav>
                    <h1>rock</h1>
                    <h1>papers</h1>
                    <h1>scissors</h1>
                </nav>

                <div className="counter">
                    <h3>score</h3>
                    <h1>{PrevCount}</h1>        
                </div>
            </div>
        </header>
        
    )
}





export const MainPage = () => {
    const state  = useState(0),
    counter = useState(0)
    
    return(
        <div className="main-body">
            <Header count={counter[0]}/>
            <main >
                {state[0] === 0 ? <FirstGamePlay state={state}  />
                             : <SelectedPiece state = {state} count = {counter}/>}
            </main>
        </div>
    )
}
