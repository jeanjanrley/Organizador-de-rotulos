import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'






export default function Responsavel(props){
    const [inputed, setInputed] = useState('')

    function writeRotulo(responsavel) {
        firebase.database().ref('fragrancias/'+ responsavel).set({
            categoria: fragrancia,
        });
      }

    return(
        <div className="Page">
            <Aside/>
            <div className="responsavel">
                <h1>Consultar e Editar responsaveis tecnicos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome do(a) responsavel tecnico(a)"
                    type="text"
                    value={inputed}
                    onChange={(value) => setInputed(value.target.value)}

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
                    <span>total de responsaveis tecnicos:</span>
                    <span></span>
                </div>
                <div className="list-area">
                </div>  
            </div>
        </div>
    )
}