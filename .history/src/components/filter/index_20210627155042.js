import React, {useState} from 'react'
import './styles.scss'

export default function(props){


    return(
        <div className="filter">
            <span>{props.title}</span>
            <input
            list={props.id}
            name={props.id}
            id={props.id}
            placeholder={"digite a " + props.title}
            />
            <datalist id={props.id}>
                <option value={props.value}/>
             </datalist>
        </div>
    )
} 