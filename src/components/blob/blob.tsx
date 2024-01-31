// mouse cursor represented by a blob with changing color

import { useState, type FC } from "react";

const isMobile = () : boolean => {
    let state = false
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    state = regex.test(navigator.userAgent);

    if (!state){
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
        state = (screenWidth < 768 || screenHeight < 768);
    }

    return state
}

export const BlobCursor: FC = () => {
    // checking if mobile then exit
    

    // need to track the mouse cursor
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // update mouse position
    if (!isMobile()){
        window.onmousemove = (e) => {
            const {clientX, clientY} = e
            setX(clientX - centerX)
            setY(clientY - centerY)
        }
    }

    return (
        <>
        <Blob x={x} y={y}/>
        <Glass />
        </>
    )
}

interface BlobProps{
    x : number,
    y : number,
}

const Blob:FC<BlobProps> = ({x, y}) =>{
    return <div id="blob" style={{
        transform : `translateX(${x}px) translateY(${y}px)`
    }}>
        <div />
    </div>
}

const Glass:FC = () =>{
    return <div id="glass"></div>
}