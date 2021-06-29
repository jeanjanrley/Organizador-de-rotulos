import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'






export default function Fragrancia(props){
    const [lists, setLists] = useState(['Cereja e Aveia', 'Flor de cerejeira', 'Lavanda', 'arruda', 'capim limão', 'mãe terra'])
    const [inputed, setInputed] = useState('')
    
    

    return(
        <div className="Page">
            <Aside/>
            <div className="fragrancia">
                <h1>Consultar e Editar Rotulos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da fragrancia"
                    type="text"
                    value={inputed}
                    onChange={(value) => setInputed(value.target.value)}

                    />
                </div>
                <button
                type="button"
                onClick={() => {setLists(...lists, inputed); console.log(lists)}}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="list-area">
                    {lists.map((item) => {
                return(
                    <div key={item} className="item-list">
                        {item}
                    </div>
                )}
            )}
                </div>  
            </div>
        </div>
    )
}