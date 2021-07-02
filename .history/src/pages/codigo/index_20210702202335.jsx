import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import codigo from '../../assets/icons/codigo.png'
import { useBarcode } from 'react-barcodes';





export default function ContraRotulo(props){
    const [inputCodigoDeBarras, setInputCodigoDeBarras] = useState('0000000000000')
    const [codigoDeBarras, setCodigoDeBarras] = useState('0000000000000')
    
    const { inputRef } = useBarcode({
        value: codigoDeBarras == '' ? '0000000000000' : codigoDeBarras,
        options: {
          background: '#ffff',
          height: 130,
        }
      });

      function getRandomEan13(min = 0, max = 9) {
        var ean13 = ''
        do{
            min = Math.ceil(min);
            max = Math.floor(max);
            ean13 += String((Math.floor(Math.random() * (max - min)) + min))
        }while(ean13.length < 13)
    
        console.log(ean13)
    }
    

    return(
        <div className="Page">
            <Aside/>
            <div className="codigo-de-barras">
                <h1>Consultar e Editar contra-rotulo</h1>

                <div className="container-type-code">
                    <span>Tipo de codigo</span>
                    <input placeholder="Ex: EAN-13.."className="type-code" type="text" />
                </div>


                <div className="boxs-area">
                    <div className="box1">
                        <div className="camp-codigo-de-barras camp1">
                            <img ref={inputRef} />
                        </div>
                            <button className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras camp2">
                        <input onChange={(event) => setInputCodigoDeBarras(event.target.value)} placeholder="Digite o nº do codigo de barras" type="text" />
                        <button id="codigoDeBarrasInput"className='first-button' onClick={() => setCodigoDeBarras(inputCodigoDeBarras)}>gerar codigo de barras</button>
                        <button className='second-button' onClick={() => getRandomInt()}>gerar codigo de barras</buttonaleatorio</button>
                    </div>
                    <button className="copy-code">
                            4590713559255
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}