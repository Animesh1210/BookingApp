import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
    const {text} = useTypewriter({
        words: ['Developer', 'Designer', ' Photographer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed:80,

    });

    return(
        <h1 style={{margin:'50px'}}>I'm a
        <span style= {{fontWeight:'bold',color:'green'}}>
            {text}
        </span>
        <span style={{color: 'red'}}>
            <Cursor cursorStyle='<' />
        </span>
        </h1>

    )
}
export default Home;