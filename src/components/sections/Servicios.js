import useFetch from "../../hooks/useFetch"

function Servicios( { peticion } ) {
    
    const [servicios, error] = useFetch(peticion)

    //si hay un error, entonces se muestra lo siguiente
    if(error) {
        return (
            <span>Hubo un error</span>
        )
    }

    if(!servicios || servicios.length === 0) {
        return (
            <span>No hay servicios</span>
        )
    }


    return (
        <div className="ed-grid">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicios