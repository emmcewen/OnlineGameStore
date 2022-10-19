import React from 'react';
import GameContainer from './components/GameContainer';
import "./output.css"
import background from './images/backgroundimg.jpg'

export default function App() {
    return (
        <>
            <div style={{ backgroundImage: `url(${background})` }}></div>
            <GameContainer />
        </>
    )
}