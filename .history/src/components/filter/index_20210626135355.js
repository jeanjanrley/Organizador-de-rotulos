import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <div className="filter">
            <span>{props.title}</span>
            <input list={props.list} name={props.name} id={props.id}/>
            <datalist id={props.dataListId}>
                <option value={props.value}/>
             </datalist>
        </div>
    )
} 