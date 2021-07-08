import React, {useState} from 'react'
import './styles.scss'
import save from '../../assets/icons/save.svg'
import lixeira from '../../assets/icons/lixeira.svg'
import {firebase} from '../../services/firebase'

export default function(props){
    const [value, setValue] = useState(props.item)

    function writeRotulo(categoria) {
        if(categoria){
            firebase.database().ref('categorias/'+ value).set({
                categoria: value,
            });
        }else{
            alert('Favor digite a categoria!')
        }
        
      }

    function writeRotulo(categoria) {
        if(categoria){
            firebase.database().ref('categorias/'+ value).set({
                categoria: null,
            });
        }else{
            alert('Favor digite a categoria!')
        }
        
      }



    return(
        <div key={props.key} className="item-list">
            <input className="value" value={value} onChange={(event) => setValue(event.target.value)}/>
            <div className="menu-item-list">
                <img src={lixeira} onClick={() => writeRotulo(value)}/>
                <img src={save} onClick={() => deleRotulo(value)}/>
                <input className="checkBox" type="checkbox"/>
            </div>
        </div>
    )
}