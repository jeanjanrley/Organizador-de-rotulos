import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import Filter from '../../components/filter/index'






export default function ContraRotulo(props){
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
            <div className="contraRotulo">
                <h1>Consultar e Editar contra-rotulo</h1>
                <div className="separator"/>
                <div className="filter-area">
                    <Filter title="Categoria"/>
                    <Filter title="Fragrancia"/>

                <div className="status-area">
                    <span>total de contra rotulos:</span>
                    <span>{lists.length}</span>
                </div>
                <div className="list-area">
                    {list}
                </div>  
            </div>
        </div>
    )
}