import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <datalist>
                <option>
                    Aromatizantes
                </option>
                <option>
                    Difusores
                </option>
                <option>
                    Sabonetes liquidos
                </option>
            </datalist>
        </>
    )
} 