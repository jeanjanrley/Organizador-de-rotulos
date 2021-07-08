import React from 'react'



export default function(props){
    return(
        <div key={props.index} className="item-list">
            {props.item}
        </div>
    )
}