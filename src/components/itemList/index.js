import React, {useState, useEffect} from 'react'
import './styles.scss'
import save from '../../assets/icons/save.svg'
import lixeira from '../../assets/icons/lixeira.svg'
import {firebase} from '../../services/firebase'

export default function(props){
    const item = props.item
    const [value, setValue] = useState(props.item)
    useEffect(() => {setValue(props.item)}, [item])

    function saveRotulo(categoria) {
        if(categoria){
            firebase.database().ref('categorias/'+ props.item).update({
                categoria: value,
            });
        }else{
            alert('Favor digite a categoria!')
        }
        
      }

        function deleRotulo(categoria) {
            if(categoria){
                if(window.confirm("Remover rotulo do banco de dados? ")){
                    firebase.database().ref('categorias/' + `${value}`).remove();
                }
                else{return}
            }
            else{return}
          }


    return(
        <div className="item-list">
            <input className="value" value={value} onChange={(event) => setValue(event.target.value)}/>
            <div className="menu-item-list">
                <img src={lixeira} onClick={() => deleRotulo(value)}/>
                <img src={save} onClick={() => saveRotulo(value)}/>
                <input className="checkBox" type="checkbox"/>
            </div>
        </div>
    )
}