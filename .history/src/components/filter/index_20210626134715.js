import React from 'react'
import './styles.scss'

export default function(props){
    return(
        <>
            <h2>{props.title}</h2>
            <input list="browsers" name="browser" id="browser"/>
            <datalist id="browsers">
                <option value="Edge">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
  </datalist>
        </>
    )
} 