import React from 'react'
import './styles.scss'


export default function(props){
    return(
        <div key={props.key} className="item-list">
            <input className="vale" value={props.item}/>
            <input className="checkBox" type="checkbox"/>
        </div>
    )
}