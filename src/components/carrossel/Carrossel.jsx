import './Carrossel.css'
const Carrossel = () => {
    return (
        <div className="carrossel">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src='/src/assets/banner/anuncio1.png' className="d-block w-100" alt="Anuncio 01" />
                    </div>
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src='/src/assets/banner/anuncio2.png' className="d-block w-100" alt="Anuncio 02" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    )
}

export default Carrossel