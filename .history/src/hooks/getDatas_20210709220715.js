import { useEffect, useState } from "react";
import {firebase} from '../services/firebase'


export default function useGetDatas(rota){
    const [listaDeItems, setListaDeItems] = useState([])
    const [listen, setListen] = useState(false)

    if(rota)
}