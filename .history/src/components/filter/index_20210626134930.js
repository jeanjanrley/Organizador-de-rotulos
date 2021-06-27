import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <input list={props.list} name={props.name} id={props.id}/>
            <datalist id={props.dataListId}>
                <option value="Edge"/>
                <option value="Firefox"/>
                <option value="Chrome"/>
                <option value="Opera"/>
                <option value="Safari"/>
             </datalist>
        </>
    )
} 