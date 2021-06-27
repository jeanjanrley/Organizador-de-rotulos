import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <datalist>
                <option value="Aromatizante"/>
                <option value="Sabonte liquido"/>
                <option value="Aromatizante"/>
            </datalist>
        </>
    )
} 