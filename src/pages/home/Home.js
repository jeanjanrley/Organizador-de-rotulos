import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import {firebase} from '../../services/firebase'

import './styles.scss'


export default function Home(){
    const [categoria, setCategoria] = useState('')
    const [fragrancia, setFragrancia] = useState('')
    const [volume, setVolume] = useState('')
    const [data, setData] = useState('')
    const [contraRotulos, setContraRotulos] = useState('')
    const [contraRotulo, setContraRotulo] = useState('')

    function writeRotulo(categoria, fragrancia, volume, data, contraRotulo) {
        firebase.database().ref('rotulos/' + `${categoria}/${categoria} - ${fragrancia} - ${volume}`).set({
          categoria: categoria,
          fragrancia: fragrancia,
          volume: volume,
          data: data,
          contraRotulo: contraRotulo,
        });
      }




    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter title="Categoria" setState={setCategoria} value={categoria}/>
                    <Filter title="Fragrancia" setState={setFragrancia} value={fragrancia}/>
                    <Filter title="Volume" setState={setVolume} value={volume}/>
                </div>

                <div className="contra-rotulo">
                    <span>Contra rotulo</span>

                    
                    <div className="data-rotulos">
                        
                        <div className="contra-rotulo-area">
                            <input
                            value={contraRotulos}
                            onChange={(event) => setContraRotulos(event.target.value)}
                            list="contra-rotulos"
                            className="filter-rotulo"/>

                            <datalist id='contra-rotulos'>
                                <option value='Aromatizante - Cereja e aveia - 250 ml'/>
                            </datalist>

                            <textarea
                                placeholder="Digite os dados do contra rotulo"
                                value={contraRotulo}
                                onChange={(event) => setContraRotulo(event.target.value)}
                            />
                        </div>
                        
                        <div className="sub-filters-area">
                            <Filter className="Filter" title="Lote" placeholder="lote da fragrancia"/>
                            <Filter className="Filter" title="data" placeholder="Data de produção" setState={setData} value={data}/>
                        </div>


                    </div>
                    <button onClick={() => writeRotulo(categoria, fragrancia, volume, data, contraRotulo)} type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}