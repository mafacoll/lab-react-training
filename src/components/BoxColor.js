import React from 'react'
export default function BoxColor(props) {
    let r = props.r
    let g = props.g
    let b = props.b
    let divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`,
    };
    return (
       <div style={divStyle}> #{r},{g},{b} </div>
    )
}


