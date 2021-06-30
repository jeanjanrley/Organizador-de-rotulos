import React, {useState, useEffect} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'
import {firebase} from '../../services/firebase'






export default function Categoria(props){
    const [inputed, setInputed] = useState('')
    const [listaDeCategorias, setListaDeCategorias] = useState([])
    const [evento, setEvento] = useState(false)


    useEffect(() => {
        var categorias = firebase.database().ref('categorias');
        categorias.on('value', (snapshot) => {
        if(snapshot.val()){
            const data = snapshot.val();
        const arrayDeArrays = Object.entries(data)
        const arrayDeCategorias = arrayDeArrays.map(([key, value]) => {return(key)})
        setListaDeCategorias(arrayDeCategorias)
        }
        else{
            setListaDeCategorias(0)
        }
        })
        
    },[evento])

    console.log(listaDeCategorias)




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
                }}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de categoria:</span>
                    <span>{listaDeCategorias.length}</span>
                </div>
                <div className="list-area">
                    {listaDeCategorias.length > 0 && listaDeCategorias.map((obj, index) => {return(
                        <div key={index} className="item-list">{obj}</div> 
                    )})}
                </div>  
            </div>
        </div>
    )
}