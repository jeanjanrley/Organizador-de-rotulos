import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <div className="filter">
            <span>{props.title}</span>
            <input list={props.datalistId} name={props.id} id={props.id}/>
            <datalist id={props.datalistId}>
                <option value={props.value}/>
             </datalist>
        </div>
    )
} 