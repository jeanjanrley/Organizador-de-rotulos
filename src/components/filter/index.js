import React from 'react'
import './styles.scss'

export default function(props){

    return(
        <div className="filter">
            {props.title == null ? <></> :  <span>{props.title}</span>}
            <input
                value={props.value}
                onChange={(event) => props.setState(event.target.value)}
                list={props.id}
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
                type={props.type == null ? "text" :  props.type}
            />
            <datalist id={props.id}>
                <option value={props.value}/>
             </datalist>
        </div>
    )
} 