import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <input type="text"/>
            <datalist id="algo">
                <option keyvalue="Aromatizante"/>
                <option keyvalue="Sabonte liquido"/>
                <option keyvalue="Difusor de Ambiente"/>
            </datalist>
        </>
    )
} 