import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'
import useGetDatas from '../../hooks/getDatas'
import {firebase} from '../../services/firebase'
import ItemList from '../../components/itemList/index'
 





export default function Categoria(props){
    const [inputed, setInputed] = useState('')
    const {listaDeItems, listen, setListen} = useGetDatas('categorias')


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
                    setListen(!listen)
                    setInputed('')
                }}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de categoria:</span>
                    <span>{listaDeItems.length}</span>
                </div>
                <div className="list-area">
                    {listaDeItems.length > listaDeItems.map((item, index) => {return(
                        <ItemList ket={index} item={item}/>
                    )})}
                </div>  
            </div>
        </div>
    )
}