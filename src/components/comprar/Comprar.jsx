import style from './Comprar.module.css'
//IMAGENS
import familia from '../../assets/familia.svg'

const Comprar = () => {
    return (
        <div className={style.container}>
            <>
                <>
                    <img src={familia} alt="Mãe, pai e filho reunidos" />
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