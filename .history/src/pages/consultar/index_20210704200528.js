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
                const arrayDeItems = arrayDeArrays.map(([key, value]) => {return(key)})
                setListadeRotulos(arrayDeItems)
                }

            else{
                setListadeRotulos(0)
            }
        })
        
    },[])


    //const ComponentRotulos = listadeRotulos.map((obj, index) => {
    //    return(<Rotulo key={index} nome={obj.nome} lote={obj.lote} data={obj.producao} validade={obj.validade} contraRotulo={obj.contraRotulo}/>)
    //})

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
                        <div className="contra-rotulo-area">
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}