import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'                          
import lupa from '../../assets/icons/lupa.svg'
import {firebase} from '../../services/firebase'
import useGetDatas from '../../hooks/getDatas'






export default function Fragrancia(props){
    const [inputed, setInputed] = useState('')
    const {listaDeItems, listen, setListen} = useGetDatas('fragrancias')

    function writeRotulo(fragrancia) {
        firebase.database().ref('fragrancias/'+ fragrancia).set({
            categoria: fragrancia,
        });
      }

    return(
        <div className="Page">
            <Aside/>
            <div className="fragrancia">
                <h1>Consultar e Editar Fragrancias</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da fragrancia"
                    type="text"
                    value={inputed}
                    onChange={(target) => setInputed(target.target.value)}

                    />
                </div>
                <button
                type="button"
                onClick={() => writeRotulo(inputed)}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de fragrancias:</span>
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