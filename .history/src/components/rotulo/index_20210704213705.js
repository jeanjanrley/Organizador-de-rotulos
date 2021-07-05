import React, {useState} from 'react'
import {firebase} from '../../services/firebase'
import './style.scss'
import codigo from '../../assets/icons/codigo.png'
import save from '../../assets/icons/save.svg'
import edit from '../../assets/icons/edit.svg'
import lixeira from '../../assets/icons/lixeira.svg'
import { useBarcode } from 'react-barcodes';


export default function Rotulo(props){

    const [lote, setLote] = useState(props.lote)
    const [data, setData] = useState(props.data)
    const [validade, setValidade] = useState(props.validade)
    const [textAreaValue, setTextAreaValue] = useState(props.contraRotulo)
    const [textEdit, setTextEdit] = useState(true)
    const [codigoDeBarras, setCodigoDeBarras] = useState('0000000000000')


    function codeEan13(numero){
        if(numero != 0){
            function splitToDigit(n){return [...n + ''].map(Number)}
    
        const codigoNum = parseInt(numero)
        const codigo = splitToDigit(codigoNum)
    
        const multiplos = codigo.map((caracter, index) => {
            return(
                index % 2 === 0 ? caracter * 1 : caracter * 3
                )
            })
        var total = 0
        multiplos.forEach((val) => total += val)
        const digitoVerificador = ((Math.trunc(total / 10) + 1) * 10) - total
    
        return(digitoVerificador)
        }
        else{return(0)}
    }
    
    
    function removeRotulo(nome) {
        if(window.confirm("Remover rotulo do banco de dados? ")){
            firebase.database().ref('rotulos/' + `${nome}`).remove();
        }
        else{return}
      }

    function saveEdit(nome, lote, data, validade, textAreaValue) {
        if(window.confirm("Salvar edições no contra-rotulo? ")){
            firebase.database().ref('rotulos/' + `${nome}`).update({
                lote: lote,
                dataDeProducao: data,
                validade: validade,
                contraRotulo: textAreaValue,
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
                    onClick={() => saveEdit(props.nome, lote, data, validade, textAreaValue)}
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
                        <span>Lote:</span>
                        <input 
                            disabled = {textEdit}
                            className="input-list"
                            value={lote}
                            onChange={(event => setLote(event.target.value))
                        }/>
                    </div>

                    <div>
                        <span>D. Prod:</span>
                        <input
                            type = {textEdit == false && "date"}
                            disabled = {textEdit}
                            className="input-list"
                            value={data}
                            onChange={(event => setData(event.target.value))
                        }/>
                    </div>

                    <div>
                        <span>D. Val:</span>
                        <input 
                            type = {textEdit == false && "date"}
                            disabled = {textEdit}
                            className="input-list"
                            value={validade}
                            onChange={(event => setValidade(event.target.value))
                        }/>
                    </div>
                </div>

                <div className="codigo-de-barras">
                    <canvas id="codigoDeBarras" ref={inputRef} />
                </div>

                
            </div>
                <button type="button">Download</button>
        </div>
    )
}