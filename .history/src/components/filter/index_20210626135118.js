import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <div c>
            <h2>{props.title}</h2>
            <input list={props.list} name={props.name} id={props.id}/>
            <datalist id={props.dataListId}>
                <option value={props.value}/>
             </datalist>
        </>
    )
} 