import { number, string } from "prop-types"
function Cupcake({ imagen, sabor, descripcion, color, precio }) {
    return (
        <div className="s-radious-1 s-shadow-bottom background  s-shadow-card-micro white-color s-pxy-2">
            <img src={imagen} alt={sabor} />
            <p>{ descripcion }</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}
//manejo de errores, para especificar el tipo de dato que vamos a usar
Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    sabor: string.isRequired,
    imagen: string
}

//para cuando no haya imagen, se pone una por defecto
Cupcake.defaultProps = {
    imagen: "https://st3.depositphotos.com/5556690/12836/v/450/depositphotos_128364240-stock-illustration-vector-black-and-white-sketch.jpg",
    precio: 0
}
export default Cupcake