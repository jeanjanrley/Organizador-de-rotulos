import React from 'react';


function useGetDatas(rota){
    const [listaDeCategorias, setListaDeCategorias] = useState([])
    const [event, setEvent] = useState(false)


    useEffect(() => {
        var categorias = firebase.database().ref();
        categorias.on('value', (snapshot) => {
        if(snapshot.val()){
            const data = snapshot.val();
        const arrayDeArrays = Object.entries(data)
        const arrayDeCategorias = arrayDeArrays.map(([key, value]) => {return(key)})
        setListaDeCategorias(arrayDeCategorias)
        }
        else{
            setListaDeCategorias(0)
        }
        })
        console.log(listaDeCategorias)
        
    },[event])
}