import React, {useEffect, useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import Rotulo from '../../components/rotulo/index'
import {firebase} from '../../services/firebase'

import '../home/styles.scss'


export default function Home(){

    var arrayDeObjetos

    const dbRef = firebase.database().ref('rotulos/').get().then( async (resultado) => {
        if (resultado.exists()) {
            const rotulos = await resultado.val()
            const arrayTratado = Object.entries(rotulos)
            const arrayDeObjetos = arrayTratado.map(([key, value]) => {return({
                nome: key,
                contraRotulo: value.contraRotulo,
                producao: value.dataDeProdução,
                fragrancia: value.fragrancia,
                lote: value.lote,
                meida: value.medida,
                responsavel: value.responsavel,
                validade: value.validade,
            })})

            const ListRotulos = arrayDeObjetos.map( async(obj, index) => {
                return <Rotulo key={index} nome={obj.nome} lote={obj.lote} data={obj.data} validade={obj.validade}/>
            })

        } else {
            console.log("Nenhum dado foi encontrado!");
        }
    }).catch((error) => {
        console.log("O Bgl ficou doido ai em.." + error);
    });
    

    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Consultar e Editar Rotulos</h1>
                <div className="filterArea">
                    <Filter title="Categoria"/>
                    <Filter title="Fragrancia"/>
                    <Filter title="Volume"/>
                    <Filter title="Res. Tecnico"/>
                </div>

                <div className="contra-rotulo">
                    <div className="contra-rotulo-count">
                        <span>Contra rotulo(s):</span>
                    </div>
                    <div className="contra-rotulo-space">
                        <button className="edicao">Habilitar edição</button>
                        <div className="contra-rotulo-area">
                            {ListRotulos}
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}