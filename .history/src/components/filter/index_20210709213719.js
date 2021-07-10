import React, {useState, useEffect} from 'react'
import './styles.scss'
import useGetDatas from '../../hooks/getDatas.js'

export default function(props){
    const {listaDeItems, setListaDeItems, listen, setListen} = useGetDatas('categorias')
    

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
             </datalist>
        </div>
    )
} 