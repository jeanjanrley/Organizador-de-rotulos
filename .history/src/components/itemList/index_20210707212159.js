import React from 'react'
import './styles.scss'


export default function(props){
    const [value, value] = useState(props.item)

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
        <div key={props.key} className="item-list">
            <input className="value" value={props.item}/>
            <input className="checkBox" type="checkbox"/>
        </div>
    )
}