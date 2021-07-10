import React, {useState, useEffect} from 'react'
import './styles.scss'
import useGetDatas from '../../hooks/getDatas'

export default function(props){
    
    

    return(
        <div className="filter">
            {props.title == null ? <></> :  <span>{props.title}</span>}
            {props.subTitle == null ? <></> :  <span className="sub-title">{props.subTitle}</span>}

            <input
                value={props.value}
                onChange={(event) => props.setState(event.target.value)}
                list="teste"
                name={props.id}
                id={props.id}
                placeholder={props.placeholder}
                type={props.type == null ? "text" :  props.type}
            />
            <datalist id="teste">
                {options.length > 0 && options.map((item, index) => {return(
                    <option key={index} value={item}/>
                )})}
             </datalist>
        </div>
    )
} 