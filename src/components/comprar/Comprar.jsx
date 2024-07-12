import style from './Comprar.module.css'

const Comprar = () => {
    return (
        <div className={style.container}>
            <>
                <>
                    <img src="../src/assets/familia.svg" alt="" />
                </>
                <div className={style.content}>
                    <h2>Como comprar um imóvel para sua familia</h2>
                    <p>Temos as melhores ofertas de casas e apartamentos para você e sua familia podendo ser negociada diretamente com o proprietário.</p>
                </div>
                <div className={style.button}>
                    <a href="">Confira os destaques <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </>
        </div>
    )
}

export default Comprar