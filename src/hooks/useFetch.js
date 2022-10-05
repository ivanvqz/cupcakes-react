import { useEffect, useState } from 'react'
import { get } from 'axios'

function useFetch(endpoint) {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect( () => {
        get(`${process.env.REACT_APP_URL_API}${endpoint}`)
        .then(({data}) => setData(data))//hay un atributo data, que es el que se necesita
        .catch(err => setError(err))
    }, [endpoint]) //se pasan las props, por so algo cambia, se vuelve a renderizar

    return [data, error]
}

export default useFetch

// useEffect( () => {
    //     fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
    //     .then(response => response.json())//se retorma el método json
    //     .then(data => setCupcakes(data))//a la variable cupcakes se le asigna el valor de data
    //     .catch(e => console.log(e))
    // }, [peticion, title]) //se pasan las props, por so algo cambia, se vuelve a renderizar