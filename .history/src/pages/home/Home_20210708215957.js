import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import {firebase} from '../../services/firebase'
import Medida from '../../components/medida/index'

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
    const [codigoDeBarras, setCodigoDeBarras] = useState(0000000000000)


    function codeEan13(numero){
        if(numero != 0){
            function splitToDigit(n){return [...n + ''].map(Number)}
    
        const codigoNum = parseInt(numero)
        const codigo = splitToDigit(codigoNum)
    
        const multiplos = codigo.map((caracter, index) => {
            return(
                index % 2 === 0 ? caracter * 1 : caracter * 3
                )
            })
        var total = 0
        multiplos.forEach((val) => total += val)
        const digitoVerificador = ((Math.trunc(total / 10) + 1) * 10) - total
    
        return(digitoVerificador)
        }
        else{return(0)}
    }

    function getRandomEan13(min = 0, max = 9) {
        var ean13 = ''
        do{
            min = Math.ceil(min);
            max = Math.floor(max);
            ean13 += String((Math.floor(Math.random() * (max - min)) + min))
        }while(ean13.length < 12)

        const digito = codeEan13(ean13)
        setCodigoDeBarras(ean13 + digito)
    }


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
                    <Filter placeholder="Ex: 'Sabonete liquido..'" title="Categoria" setState={setCategoria} value={categoria}/>
                    <Filter placeholder="Ex: 'Lavanda..'" title="Fragrancia" setState={setFragrancia} value={fragrancia}/>
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
                            <Filter className="Filter" placeholder="Responsavel tecnico" setState={setResponsavel}/>
                        </div>


                    </div>
                    <button onClick={() => writeRotulo(categoria, fragrancia, medida, lote, data, validade, responsavel, contraRotulo, codigoDeBarras)} type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}