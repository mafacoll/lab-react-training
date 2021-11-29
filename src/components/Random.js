import React from 'react';

export default function Random(props){
    let min = props.min
    let max = props.max
    let result = Math.floor(Math.random() * (max-min))
    return(
        <div>
            <p> Random value between {min} and {max} = {result}</p>
        </div>
    )
}