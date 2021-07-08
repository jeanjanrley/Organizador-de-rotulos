import React from 'react'
import './styles.scss'
import save from '../../assets/icons/'


export default function(props){
    const [value, setValue] = useState(props.item)

    function writeRotulo(categoria) {
        if(categoria){
            firebase.database().ref('categorias/'+ value).set({
                categoria: value,
            });
        }else{
            alert('Favor digite a categoria!')
        }
        
      }



    return(
        <div key={props.key} className="item-list">
            <input className="value" value={value} onChange={(event) => setValue(event.target.value)}/>
            <input className="checkBox" type="checkbox"/>
        </div>
    )
}