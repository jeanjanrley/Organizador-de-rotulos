import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <datalist>
                <option value="Algo"/>
            </datalist>
        </>
    )
} 