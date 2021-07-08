import React from 'react'
import './styles.scss'


export default function(props){
    return(
        <div key={props.key} className="item-list">
            <input clas value={props.item}/>
            <input type="checkbox"/>
        </div>
    )
}