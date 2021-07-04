import React, {useEffect, useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import Rotulo from '../../components/rotulo/index'
import {firebase} from '../../services/firebase'

import '../home/styles.scss'


export default function Home(){

    const [coisas, setCoisas] = useState([])

    useEffect(() => {
        var categorias = firebase.database().ref(rota);
        categorias.on('value', (snapshot) => {
        if(snapshot.val()){
            const data = snapshot.val();
            const arrayDeArrays = Object.entries(data)
            const arrayDeItems = arrayDeArrays.map(([key, value]) => {return(key)})
            setListaDeItems(arrayDeItems)
            }
        else{
            setListaDeItems(0)
        }
        })
        
    },[])
 
    const dbRef = firebase.database().ref('rotulos/').get().then((resultado) => {
        if (resultado.exists()) {
            const rotulos = resultado.val()
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

            setCoisas(arrayDeObjetos)

        } else {
            console.log("Nenhum dado foi encontrado!");
        }
    }).catch((error) => {
        console.log("O Bgl ficou doido ai em.." + error);
    });


    const listRotulos = coisas.map((obj, index) => {
        return(<Rotulo key={index} nome={obj.nome} lote={obj.lote} data={obj.producao} validade={obj.validade} contraRotulo={obj.contraRotulo}/>)
    })

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
                        <span>{listRotulos.length}</span>
                    </div>
                    <div className="contra-rotulo-space">
                        <div className="contra-rotulo-area">
                            {listRotulos}
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}