import { useEffect, useState } from "react";
import {firebase} from '../services/firebase'


export default function useGetDatas(rota){
    const [listaDeItems, setListaDeItems] = useState([])
    const [listen, setListen] = useState(false)


    useEffect(() => {
        var categorias = firebase.database().ref(rota);
        categorias.on('value', (snapshot) => {
        if(snapshot.val() > 0){
            const data = snapshot.val();
            const arrayDeArrays = Object.entries(data)
            const arrayDeItems = arrayDeArrays.map(([key, value]) => {return(key)})
            setListaDeItems(arrayDeItems)
            }
        else{
            console.log('')
            setListaDeItems(0)
        }
        })
        
    },[listen])

    return{listaDeItems, listen, setListen}


}