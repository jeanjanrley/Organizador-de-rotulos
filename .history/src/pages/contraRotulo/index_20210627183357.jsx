import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import Filter from '../../components/filter/index'
import {firebase} from '../../services/firebase'






export default function ContraRotulo(props){
    const [categoria, setCategoria] = useState('')
    const [fragrancia, setFragrancia] = useState('')
    const [lote, setLote] = useState('')
    const [contraRotulo, setContraRotulo] = useState('')
    
    function writeRotulo(categoria, fragrancia, lote, contraRotulo) {
        firebase.database().ref('contra-rotulos/'+ categoria + ' - ' + fragrancia  + ' - ' + lote).set({
            contraRotulo: contraRotulo,
            categoria: categoria,
            fragrancia: fragrancia,
            lote: lote,
        });
      }


    return(
        <div className="Page">
            <Aside/>
            <div className="contraRotulo">
                <h1>Consultar e Editar contra-rotulo</h1>
                <div className="separator"/>

                <div className="filter-area">
                    <Filter setState={setCategoria} title="Categoria"/>
                    <Filter setState={setFragrancia} title="Fragrancia"/>
                    <Filter setState={setLote} title="Lote"/>
                </div>

                <div className="contra-rotulo">
                </div>
                <div className="area">
                    <span>Contra Rotulo</span>

                    <textarea
                        value={contraRotulo}
                        onChange={(event) => setContraRotulo(event.target.value)}
                        placeholder="Digite as informações do contra-rotulo"
                        className="list-area"/>

                    <button
                        type="button"
                        onClick={() => writeRotulo(categoria, fragrancia, lote, contraRotulo)}    
                    >adcionar</button>  
                </div>
            </div>
        </div>
    )
}