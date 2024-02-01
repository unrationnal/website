
// animation to show on the right side on large screen

import type { FC } from "react"

interface Props {
    repeatMSG : string
}

const SideAnimation:FC<Props> = ({repeatMSG}) => {
    return (
        <div className="animation">
        {Array(15).fill(0).map((x, i) => {

            let marginLeft : number

            if (i % 2 === 0){marginLeft = 0}
            else if (i % 3 === 0){marginLeft = 50}
            else{marginLeft = 100}
            

            return <h1 key={i} style={{
                marginLeft : -marginLeft + "%"
            }}>{repeatMSG}</h1>
        })}
        </div>  
    )
}

export default SideAnimation