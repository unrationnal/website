// place holder component

import type { FC } from "react"

interface Props {
    size : string,
    min : string,
    max : string,
}

const PlaceHolder:FC<Props> = ({size, min, max}) => {
    const inStyle :React.CSSProperties = {
        width : "100%",
        height : `clamp(${min}, ${size}, ${max})`
    }
    return (
        <div style={inStyle}>
        </div>
    )
}

export default PlaceHolder