import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import { useBarcode } from 'react-barcodes';
import copy from '../../assets/icons/copy.svg'
import useGetCode from '../../hooks/getCode'






export default function ContraRotulo(props){
    
    const [inputCodigoDeBarras, setInputCodigoDeBarras] = useState('0000000000000')
    const {codeEan13, getRandomEan13, codigoDeBarras, setCodigoDeBarras} = useGetCode()
    
    const { inputRef } = useBarcode({
        value: codigoDeBarras == '' ? '0000000000000' : codigoDeBarras,
        options: {
          background: '#ffff',
          height: 130,
          fontSize: 25,
        }
      });
      
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codigoDeBarras).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          })
    }

    function codigoDeBarrasDownload(){
            var link = document.createElement('a');
            link.download = `codigo de barras: ${codigoDeBarras}.png`;
            link.href = document.getElementById('codigoDeBarras').toDataURL()
            link.click();
    }
    

    return(
        <div className="Page">
            <Aside/>
            <div className="codigo-de-barras">
                <h1>Gerar e baixar codigos de barra</h1>

                <div className="container-type-code">
                    <span className="type-code">Tipo de codigo EAN-13</span>
                </div>


                <div className="boxs-area">
                    <div className="box1">
                        <div className="camp-codigo-de-barras camp1">
                            <canvas id="codigoDeBarras" ref={inputRef} />
                        </div>
                            <button onClick={() => codigoDeBarrasDownload()} className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras camp2">
                        <input type="text" maxLength="12" onChange={(event) => setInputCodigoDeBarras(event.target.value)}  placeholder="Digite o nº do codigo de barras"/>
                        <button id="codigoDeBarrasInput"className='first-button' onClick={() => {setCodigoDeBarras(inputCodigoDeBarras + codeEan13(inputCodigoDeBarras))}}>gerar codigo de barras</button>
                        <button className='second-button' onClick={() => getRandomEan13()}>gerar codigo de barras aleatorio</button>
                    </div>
                    
                    <button
                    className="copy-code"
                    onClick={() => copyToClipboard()}
                    >
                            <img src={copy} alt="copiar"/><span>{codigoDeBarras}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}