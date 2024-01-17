// mouse cursor represented by a blob with changing color

import { useState, type FC } from "react";

export const BlobCursor: FC = () => {
    // need to track the mouse cursor
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // update mouse position
    window.onmousemove = (e) => {
        const {clientX, clientY} = e
        setX(clientX - centerX)
        setY(clientY - centerY)
    
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