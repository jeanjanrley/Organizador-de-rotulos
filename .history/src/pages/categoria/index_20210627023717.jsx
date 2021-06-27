import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'






export default function Categoria(props){
    const [lists, setLists] = useState(['Aromatizante', 'difusor de ambiente', 'Sabonete liquido', 'pperfume de carro', 'capim limão', 'mãe terra'])
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
            <div className="categoria">
                <h1>Consultar e Editar categoria</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da categoria"
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
                    <span>total de categoria:</span>
                    <span>{lists.length}</span>
                </div>
                <div className="list-area">
                    {list}
                </div>  
            </div>
        </div>
    )
}