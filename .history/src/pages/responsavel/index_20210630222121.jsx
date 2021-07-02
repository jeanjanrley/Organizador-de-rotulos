import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'                          
import lupa from '../../assets/icons/lupa.svg'
import {firebase} from '../../services/firebase'
import useGetDatas from '../../hooks/getDatas'






export default function respon(props){
    const [inputed, setInputed] = useState('')
    const {listaDeItems, listen, setListen} = useGetDatas('respons')

    function writeRotulo(respon) {
        if(respon){
            firebase.database().ref('respons/'+ respon).set({
                respon: respon,
            });
        }else{
            alert('Favor digite a respon!')
        }
        
      }

    return(
        <div className="Page">
            <Aside/>
            <div className="respon">
                <h1>Consultar e Editar Responsaveis Tecnicos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da respon"
                    type="text"
                    value={inputed}
                    onChange={(target) => setInputed(target.target.value)}

                    />
                </div>
                <button
                type="button"
                onClick={() => {
                    writeRotulo(inputed)
                    setListen(!listen)
                    setInputed('')
                }}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de respons:</span>
                    <span>{listaDeItems.length}</span>
                </div>
                <div className="list-area">
                {listaDeItems.map((item, index) => {return(
                        <div key={index} className="item-list">{item}</div>
                    )})}
                </div>  
            </div>
        </div>
    )
}