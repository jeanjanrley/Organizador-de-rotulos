import React from 'react'
import './styles.scss'

export default function(props){

    return(
        <div className="medida">

            {props.title == null ? <></> :  <span>{props.title}</span>}

            <div className="medida-area">

                    <input className="input-medida"
                                onChange={(event) => props.setState(event.target.value)}
                                name={props.id}
                                id={props.id}
                                placeholder={props.placeholder}
                                type={props.type == null ? "text" :  props.type}
                    />

                    <select className="select">
                        <optgroup label="Volume">
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                        </optgroup>
                        <optgroup label="Peso">
                            <option value="mg">mg</option>
                            <option value="Kg">Kg</option>
                        </optgroup>
                        <optgroup label="Comprimento">
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                        </optgroup>
                    </select>

                    

                </div>

        </div>
    )
} 