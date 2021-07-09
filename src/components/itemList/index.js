import React, {useState, useEffect} from 'react'
import './styles.scss'
import save from '../../assets/icons/save.svg'
import lixeira from '../../assets/icons/lixeira.svg'
import edit from '../../assets/icons/edit.svg'
import {firebase} from '../../services/firebase'

export default function(props){
    const [textEdit, setTextEdit] = useState(true)
    const item = props.item
    const [value, setValue] = useState(props.item)
    useEffect(() => {setValue(props.item)}, [item])


    function deleRotulo(categoria) {
        if(categoria){
            if(window.confirm("Remover rotulo do banco de dados? ")){
                firebase.database().ref('categorias/' + `${value}`).remove();
            }
            else{return}
        }
        else{return}
      }

    function saveRotulo(value) {
        if(value){
            firebase.database().ref('categorias/'+ item).update({
                categoria: value,
            });
        }else{
            alert('Favor digite um valor')
        }
        
      }


    return(
        <div className="item-list">
            <input disabled={textEdit} className="value" value={value} onChange={(event) => setValue(event.target.value)}/>
            <div className="menu-item-list">
                <img src={lixeira} onClick={() => deleRotulo(value)}/>
                <img src={edit} onClick={() => setTextEdit(!textEdit)}/>
                <img src={save} onClick={() => saveRotulo(value)}/>
                <input className="checkBox" type="checkbox"/>
            </div>
        </div>
    )
}