import React from 'react'
import {firebase} from '../../services/firebase'
import './style.scss'
import codigo from '../../assets/icons/codigo.png'
import save from '../../assets/icons/save.svg'
import edit from '../../assets/icons/edit.svg'
import lixeira from '../../assets/icons/lixeira.svg'

export default function Rotulo(props){

    const [textEdit, setTextEdit] = useState(false)
    function editText(){
        const contraRotuloText = document.querySelector('#contra-rotulo-text')
        contraRotuloText.disabled = !contraRotuloText.disabled
    }


    function writeRotulo (categoria, fragrancia, medida, lote, data, validade, responsavel, contraRotulo) {
        firebase.database().ref('rotulos/' + `${categoria} | ${fragrancia} | ${medida}`).set({
          categoria: categoria,
          fragrancia: fragrancia,
          medida: medida,
          lote: lote,
          dataDeProdução: data,
          validade: validade,
          responsavel: responsavel,
          contraRotulo: contraRotulo,
        });
      }



    return(
        <div className="rotulo">

            <div className="title-rotulo">
                <div className="edit-save">
                    <img className="save" src={save} alt="salvar"/>
                    <img
                    className="edit"
                    src={edit} alt="editar"
                    onClick={editText}
                    />
                    <img className="edit" src={lixeira} alt="editar"/>
                </div>
                <h2>{props.nome}</h2>
                <input type="checkbox"/>
            </div>

            <div className="sub-rotulo">
                <textarea id="contra-rotulo-text"
                    value={props.contraRotulo}
                    onChange={props.setState}
                    disabled = {textEdit}
                />

                <div className="rotuloDados">
                    <div>
                        <span>Lote:</span> <span>{props.lote}</span>
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