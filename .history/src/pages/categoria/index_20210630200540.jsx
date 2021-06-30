import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import lupa from '../../assets/icons/lupa.svg'
import {firebase} from '../../services/firebase'






export default function Categoria(props){
    const [inputed, setInputed] = useState('')


    useEffect(() => {
        var starCountRef = firebase.database().ref('categorias');
        starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
        });
    })



    function writeRotulo(categoria) {
        firebase.database().ref('categorias/'+ categoria).set({
            categoria: categoria,
        });
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
                onClick={() => writeRotulo(inputed)}
                >
                    adcionar
                </button>
                <div className="separator"/>
                <div className="status-area">
                    <span>total de categoria:</span>
                    <span></span>
                </div>
                <div className="list-area">
                </div>  
            </div>
        </div>
    )
}