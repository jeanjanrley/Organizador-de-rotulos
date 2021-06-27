import React from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'


const lists = ['Cereja e Aveia', 'Flor de cerejeira', 'Lavanda', 'arruda', 'capim limão', 'mãe terra']

const List = lists.map((item) => {
    return(
        <div className="item-list">
            {item}
        </div>
    )
})


export default function Fragrancia(props){
    return(
        <div className="Page">
            <Aside/>
            <div className="fragrancia">
                <h1>Consultar e Editar Rotulos</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input placeholder="Digite o nome da fragrancia" type="text"/>
                </div>
                <button
                type="button">
                    adcionar
                </button>
                <div className="separator"/>
                <div className="list-area">
                    {List}
                </div>  
            </div>
        </div>
    )
}