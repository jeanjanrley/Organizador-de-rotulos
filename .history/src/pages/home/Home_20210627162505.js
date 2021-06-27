import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'

import './styles.scss'


export default function Home(){
    const [categoria, setCategoria] = useState('')
    const [fragrancia, setFragrancia] = useState('')
    const [volume, setVolume] = useState('')
    const [data, setData] = useState('')
    const [contraRotulos, setContraRotulos] = useState('')
    const [contraRotulo, setContraRotulo] = useState('')




    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter title="Categoria" setState={setCategoria} value={categoria}/>
                    <Filter title="Fragrancia" setState={setFragrancia} value={fragrancia}/>
                    <Filter title="Volume" setState={setVolume} value={volume}/>
                    <Filter title="data" setState={setData} value={data}/>
                </div>

                <div className="contra-rotulo">
                    <span>Contra rotulo</span>

                    <input
                    value={contraRotulos}
                    onChange={(event) => setContraRotulos(event.target.value)}
                    list="contra-rotulos"
                    className="filter-rotulo"/>

                    <datalist id='contra-rotulos'>
                        <option value='Aromatizante - Cereja e aveia - 250 ml'/>
                    </datalist>

                    <textarea
                         value={contraRotulo}
                         onChange={(event) => setContraRotulo(event.target.value)}
                    />
                    <button onClick={() => alert(categoria + fragrancia + volume + data + contraRotulo)} type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}