import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import {firebase} from '../../services/firebase'
import Medida from '../../components/medida/index'
import useGetCode from '../../hooks/getCode.js'
import useGetDatas from '../../hooks/getDatas.js'

import './styles.scss'


export default function Home(){
    const [categoria, setCategoria] = useState('')
    const [fragrancia, setFragrancia] = useState('')
    const [medida, setMedida] = useState({})
    const [lote, setLote] = useState('')
    const [data, setData] = useState({})
    const [validade, setValidade] = useState(null)
    const [responsavel, setResponsavel] = useState('')
    const [contraRotulo, setContraRotulo] = useState('')
    const [contraRotulos, setContraRotulos] = useState('')
    
    const {codigoDeBarras} = useGetCode()
    const {listaDeItems, setListaDeItems, listen, setListen} = useGetDatas('categorias')



    function writeRotulo (categoria, fragrancia, medida, lote, data, validade, responsavel, contraRotulo, codigoDeBarras) {
        firebase.database().ref('rotulos/' + `${categoria} | ${fragrancia} | ${medida}`).set({
          categoria: categoria,
          fragrancia: fragrancia,
          medida: medida,
          lote: lote,
          dataDeProducao: data,
          validade: validade,
          responsavel: responsavel,
          contraRotulo: contraRotulo,
          codigoDeBarras: codigoDeBarras,
        });
      }




    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter placeholder="Ex: 'Sabonete liquido..'" title="Categoria" setState={setCategoria} value={categoria} rota="categorias"/>
                    <Filter placeholder="Ex: 'Lavanda..'" title="Fragrancia" setState={setFragrancia} value={fragrancia} rota="fragrancias"/>
                    <Medida title="Medida" setState={setMedida} value={medida}  type="number" placeholder="valor"/>
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
                            <Filter className="Filter" placeholder="lote da fragrancia" setState={setLote}/>
                            <Filter className="Filter" subTitle="data de produção" placeholder="Data de produção" type="date" setState={setData} value={data}/>
                            <Filter className="Filter" type="number" placeholder="Validade em anos" setState={setValidade}/>
                            <Filter className="Filter" placeholder="Responsavel tecnico" setState={setResponsavel} rota="responsaveis-tecnicos"/>
                        </div>


                    </div>
                            <button onClick={() => writeRotulo(categoria, fragrancia, medida, lote, data, validade, responsavel, contraRotulo, codigoDeBarras)} type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}