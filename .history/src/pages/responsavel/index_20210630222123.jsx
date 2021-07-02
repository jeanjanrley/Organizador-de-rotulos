import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'                          
import lupa from '../../assets/icons/lupa.svg'
import {firebase} from '../../services/firebase'
import useGetDatas from '../../hooks/getDatas'






export default function responsavel(props){
    const [inputed, setInputed] = useState('')
    const {listaDeItems, listen, setListen} = useGetDatas('responsavels')

    function writeRotulo(responsavel) {
        if(responsavel){
            firebase.database().ref('responsavels/'+ responsavel).set({
                responsavel: responsavel,
            });
        }else{
            alert('Favor digite a responsavel!')
        }
        
      }

    return(
        <div className="Page">
            <Aside/>
            <div className="responsavel">
                <h1>Consultar e Editar Responsaveis Tecnicos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da responsavel"
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
                    <span>total de responsavels:</span>
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