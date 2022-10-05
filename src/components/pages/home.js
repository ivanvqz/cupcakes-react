import Banner from "../sections/Banner"
import Servicios from "../sections/Servicios"
import Cupcakes from "./cupcakes"

function Home() {
    return (
        <>
            <Banner />  

            {/* pequeña pasarela */}
            <Cupcakes peticion="cupcakes?sabor_like=vainilla" />

            <Servicios peticion="servicios"/>
        </>
    )
}

export default Home