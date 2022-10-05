import Cupcake from "../cards/Cupcake"
import useFetch from "../../hooks/useFetch"

function Cupcakes( {peticion, title} ) { //son las propierdades que se reciben
    
    //se declara nuestro nuevo hook
    const [cupcakes] = useFetch(peticion)


    return(
        <div className="ed-grid">
            { title && <h1>Página de Cupcakes</h1> } {/*si existe title, poner h1 */}
            {
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            cupcakes.map( ({ id, imagen, sabor, descripcion, color, precio }) => (
                                <Cupcake
                                    key={id}//es la llave de acceso a cada elemento
                                    imagen={imagen}
                                    descripcion={descripcion}
                                    sabor={sabor}
                                    color={color}
                                    precio={precio}

                                />
                            ) )
                        }
                    </section>
                ) : (
                    <span>Cargando...</span>
                )
            }
        </div>
    )
}

export default Cupcakes

