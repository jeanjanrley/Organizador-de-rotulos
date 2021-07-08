import React from 'react'
import './styles.scss'


export default function(props){
    return(
        <div key={props.key} className="item-list">
            {props.item}
            <input type="radio"/>
        </div>
    )
}