import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import { useBarcode } from 'react-barcodes';
import copy from '../../assets/icons/copy.svg'






export default function ContraRotulo(props){
    const [inputCodigoDeBarras, setInputCodigoDeBarras] = useState('0000000000000')
    const [codigoDeBarras, setCodigoDeBarras] = useState('0000000000000')

    function codeEan13(){
        const codigo = 
        const multiplos = codigo.map((caracter, index) => {
            return(
                index % 2 === 0 ? caracter * 1 : caracter * 3
                )
            })
        console.log(multiplos)
            
    }


    
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
        

        setCodigoDeBarras(ean13)
        codeEan13()
    }

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
                <h1>Consultar e Editar contra-rotulo</h1>

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
                        <input type="text" maxlength="3" onChange={(event) => setInputCodigoDeBarras(event.target.value)}  placeholder="Digite o n?? do codigo de barras"/>
                        <button id="codigoDeBarrasInput"className='first-button' onClick={() => setCodigoDeBarras(inputCodigoDeBarras)}>gerar codigo de barras</button>
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