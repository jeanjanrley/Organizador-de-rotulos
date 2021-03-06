import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import { useBarcode } from 'react-barcodes';
import copy from '../../assets/icons/copy.svg'
import { saveAs } from 'file-saver';






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
        

        setCodigoDeBarras(ean13)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputCodigoDeBarras).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          })
    }

    function codigoDeBarrasDownload(){
        var canvas = document.getElementById("codigoDeBarras");
        canvas.toBlob(function(blob) {
            saveAs(blob, "codigo de barras.png");
        });
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
                            <img id="codigoDeBarras"  src="https://a-static.mlcdn.com.br/618x463/bicicleta-mtb-kls-sport-gold-aro-29-freio-disco-21-marchas/rideshop/170/cc8086e5e4b79a01f12f961c4343cf1d.jpg" />
                        </div>
                            <button onClick={() => codigoDeBarrasDownload()} className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras camp2">
                        <input onChange={(event) => setInputCodigoDeBarras(event.target.value)} placeholder="Digite o n?? do codigo de barras" type="text" />
                        <button id="codigoDeBarrasInput"className='first-button' onClick={() => setCodigoDeBarras(inputCodigoDeBarras)}>gerar codigo de barras</button>
                        <button className='second-button' onClick={() => getRandomEan13()}>gerar codigo de barras aleatorio</button>
                    </div>
                    
                    <button
                    className="copy-code"
                    onClick={() => copyToClipboard()}
                    >
                            <img src={copy} alt="copiar"/><span>4590713559255</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}