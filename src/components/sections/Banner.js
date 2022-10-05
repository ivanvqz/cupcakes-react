function Banner() {
    return (
        <div className="main-banner img-container dark-color">
                <div className="ed-grid lg-grid-6">
                    <div className="lg-cols-4 lg-x-2">
                        <img 
                            className="main-banner__img"
                            src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" 
                            alt="Banner"
                        />
                        <div className="main-banner__data s-center">
                            <p className="s-mb-0 t2">Bienvenido a Cupcakes</p>
                            <p>Disfruta de los mejores cupcakes de la región hechos con toda la pasión y cariño de personas más que capacitadas.</p>
                            <a className="button" href="/">Ir a nuestra galería</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner