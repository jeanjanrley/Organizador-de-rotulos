import React, {useEffect, useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import Rotulo from '../../components/rotulo/index'
import {firebase} from '../../services/firebase'

import '../home/styles.scss'


export default function Home(){

    const [listadeRotulos, setListadeRotulos] = useState([])

    useEffect(() => {
        var rotulos = firebase.database().ref('rotulos/');    
        rotulos.on('value', (snapshot) => {
            if(snapshot.val()){
                const data = snapshot.val();
                const arrayDeArrays = Object.entries(data)
                const arrayDeItems = arrayDeArrays.map(([key, value]) => {return({
                    nome: key,
                    categoria: value.categoria,
                    contraRotulo: value.contraRotulo,
                    producao: value.dataDeProducao,
                    fragrancia: value.fragrancia,
                    lote: value.lote,
                    medida: value.medida,
                    responsavel: value.responsavel,
                    validade: value.validade,
                    codigoDeBarras: value.codigoDeBarras,
                })})
                console.log(arrayDeItems)
                setListadeRotulos(arrayDeItems)
                }
            else{
                setListadeRotulos(0)
            }
        })
        
    },[])


    const ComponentRotulos = listadeRotulos.length > 0 ? listadeRotulos.map((obj, index) => {
        return(<Rotulo key={index} nome={obj.nome} lote={obj.lote} data={obj.producao} validade={obj.validade} contraRotulo={obj.contraRotulo} codigoDeBarras={obj.codigoDeBarras}/>)
    }) : ""

    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Consultar e Editar Rotulos</h1>
                <div className="filterArea">
                    <Filter title="Categoria" placeholder="Digite a" rota="categorias"/>
                    <Filter title="Fragrancia" rota="fragrancias"/>
                    <Filter title="Volume"/>
                    <Filter title="Res. Tecnico" rota="responsaveis-tecnicos"/>
                </div>

                <div className="contra-rotulo">
                    <div className="contra-rotulo-count">
                        <span>Contra rotulo(s):</span>
                        <span>{listadeRotulos.length > 0 ? listadeRotulos.length : 0}</span>
                    </div>
                    <div className="contra-rotulo-space">
                        <div className="contra-rotulo-area">
                            {ComponentRotulos}
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}