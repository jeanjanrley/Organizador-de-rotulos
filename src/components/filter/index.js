import React from 'react'
import './styles.scss'

export default function(props){

    return(
        <div className="filter">
            <span>{props.title}</span>
            <input
                value={props.value}
                onChange={(event) => props.setState(event.target.value)}
                list={props.id}
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
            />
            <datalist id={props.id}>
                <option value={props.value}/>
             </datalist>
        </div>
    )
} 