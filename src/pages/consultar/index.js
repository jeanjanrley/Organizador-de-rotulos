import React from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import Rotulo from '../../components/rotulo/index'
import {firebase} from '../../services/firebase'

import '../home/styles.scss'


export default function Home(){

    

    const dbRef = firebase.database().ref('rotulos/');
    
    dbRef.get().then((rotulo) => {
    if (rotulo.exists()) {
        const categorias = rotulo.val()
        const categoria = Object.entries(categorias)
        console.log(categoria)
        


    } else {
        console.log("Nenhum dado foi encontrado!");
    }
    }).catch((error) => {
    console.error(error);
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
                        <span>{50+1000}</span>
                    </div>
                    <div className="contra-rotulo-space">
                        <button className="edicao">Habilitar edição</button>
                        <div className="contra-rotulo-area">
                            <Rotulo/>
                            <Rotulo/>
                            <Rotulo/>
                            <Rotulo/>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}