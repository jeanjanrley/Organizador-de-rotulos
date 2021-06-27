import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <input type="text"/>
            <datalist id="algo">
                <option key="algo" value="Aromatizante"/>
                <option key="algo" value="Sabonte liquido"/>
                <option key="algo" value="Difusor de Ambiente"/>
            </datalist>
        </>
    )
} 