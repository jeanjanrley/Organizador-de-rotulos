import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'






export default function Responsavel(props){
    const [lists, setLists] = useState(['Aromatizante', 'difusor de ambiente', 'Sabonete liquido', 'perfume de carro'])
    const [inputed, setInputed] = useState('')
    
    const list = lists.map((item, index) => {
        return(
            <div key={index} className="item-list">
                {item}
            </div>
        )}
    )

    return(
        <div className="Page">
            <Aside/>
            <div className="responsavel">
                <h1>Consultar e Editar responsaveis tecnicos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da responsavel"
                    type="text"
                    value={inputed}
                    onChange={(value) => setInputed(value.target.value)}

                    />
                </div>
                <button
                type="button"
                onClick={() => {if(inputed !== '') {setLists([...lists, inputed]); console.log(lists)}}}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de responsaveis tecnicos:</span>
                    <span>{lists.length}</span>
                </div>
                <div className="list-area">
                    {list}
                </div>  
            </div>
        </div>
    )
}