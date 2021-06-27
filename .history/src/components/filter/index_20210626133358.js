import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <datalist id={props.id}>
                <option value=>
                <option value="Sabonte liquido"/>
                <option value="Difusor de Ambiente"/>
            </datalist>
        </>
    )
} 