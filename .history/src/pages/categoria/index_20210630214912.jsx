import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'
import useGetDatas from '../hooks/getDatas'
import {firebase} from '../../services/firebase'






export default function Categoria(props){
    const [inputed, setInputed] = useState('')
    
    const categorias = useGetDatas('categorias')
    console.log(categorias)

    function writeRotulo(categoria) {
        if(categoria){
            firebase.database().ref('categorias/'+ categoria).set({
                categoria: categoria,
            });
        }else{
            alert('Favor digite a categoria!')
        }
        
      }


    return(
        <div className="Page">
            <Aside/>
            <div className="categoria">
                <h1>Consultar e Editar categoria</h1>
                <div className="input-person">
                    <img src={lupa} alt="lupa" />
                    <input
                    placeholder="Digite o nome da categoria"
                    type="text"
                    value={inputed}
                    onChange={(event) => setInputed(event.target.value)}

                    />
                </div>
                <button
                type="button"
                onClick={() => {
                    writeRotulo(inputed)
                    categorias.setListen(!categorias.listen)
                }}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de categoria:</span>
                    <span>categoria.lis</span>
                </div>
                <div className="list-area">
                    
                </div>  
            </div>
        </div>
    )
}