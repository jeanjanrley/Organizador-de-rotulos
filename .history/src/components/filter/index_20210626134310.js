import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <input type="text"/>
            <datalist id="algo">
                <option value="Aromatizante"/>
                <option value="Sabonte liquido"/>
                <option value="Difusor de Ambiente"/>
            </datalist>
        </>
    )
} 