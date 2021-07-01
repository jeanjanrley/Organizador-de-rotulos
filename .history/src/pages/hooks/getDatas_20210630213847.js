import React from 'react';


function useGetDatas(rota, event){
    const [, set] = useState([])
    const [event, setEvent] = useState(false)


    useEffect(() => {
        var categorias = firebase.database().ref(rota);
        categorias.on('value', (snapshot) => {
        if(snapshot.val()){
            const data = snapshot.val();
            const arrayDeArrays = Object.entries(data)
            const arrayDeItems = arrayDeArrays.map(([key, value]) => {return(key)})
            set(arrayDeItems)
            }
        else{
            set(0)
        }
        })
        console.log(listaDeCategorias)
        
    },[event])

    return(setEvent)


}