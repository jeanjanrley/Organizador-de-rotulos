import React, {useState} from 'react'
import {firebase} from '../../services/firebase'
import './style.scss'
import codigo from '../../assets/icons/codigo.png'
import save from '../../assets/icons/save.svg'
import edit from '../../assets/icons/edit.svg'
import lixeira from '../../assets/icons/lixeira.svg'

export default function Rotulo(props){

    const [textAreaValue, setTextAreaValue] = useState(props.contraRotulo)
    const [textEdit, setTextEdit] = useState(true)

    function removeRotulo(nome) {
        if(window.confirm("Remover rotulo do banco de dados? ")){
            firebase.database().ref('rotulos/' + `${nome}`).remove();
        }
        else{return}
      }

    function saveEdit(nome, item) {
        if(window.confirm("Salvar edições no contra-rotulo? ")){
            firebase.database().ref('rotulos/' + `${nome}`).update({
                item: item
            });
            setTextEdit(!textEdit)
        }
        else{return}
      }



    return(
        <div className="rotulo">

            <div className="title-rotulo">
                <div className="edit-save">
                    <img className="save" src={save} alt="salvar"
                    onClick={() => saveEdit(props.nome, textAreaValue)}
                    />
                    <img
                    className="edit"
                    src={edit} alt="editar"
                    onClick={() => setTextEdit(!textEdit)}
                    />
                    <img className="edit" src={lixeira} alt="editar"
                    onClick={() => removeRotulo(props.nome)}/>
                </div>
                <h2>{props.nome}</h2>
                <input type="checkbox"/>
            </div>

            <div className="sub-rotulo">
                <textarea id="contra-rotulo-text"
                    value={textAreaValue}
                    onChange={(event) => (setTextAreaValue(event.target.value))}
                    disabled = {textEdit}
                />

                <div className="rotuloDados">
                    <div>
                        <span>Lote:</span> <input
                        disabled = {textEdit} className="input-list" value={props.lote} onChange={(event => setLote(event.target.value))}/>
                    </div>

                    <div>
                        <span>D. Prod:</span> <span>{props.data}</span>
                    </div>

                    <div>
                        <span>D. Val:</span> <span>{props.validade}</span>
                    </div>
                </div>

                <div className="codigo-de-barras">
                    <img src={codigo} alt="codigo de barras"/>
                </div>

                
            </div>
                <button type="button">Download</button>
        </div>
    )
}