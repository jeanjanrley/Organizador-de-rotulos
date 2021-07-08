import React from 'react'
import './styles.scss'


export default function(props){
    return(
        <div key={props.index} className="item-list">
            {props.item}
        </div>
    )
}