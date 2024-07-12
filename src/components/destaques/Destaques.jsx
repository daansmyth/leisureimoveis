import style from './Destaques.module.css';

const Destaques = () => {
    return (
        <div className={style.destaques}>
            <div>
                <img src='leisureimoveis/src/assets/banner/destaques.png' alt="Destaques" />
            </div>
            <div className={style.content}>
                <h2>Vem ver os destaques que separamos para você</h2>
                <p>Procurando um imóvel novo para chamar de seu?</p>
                <p>Então você esta no lugar certo!</p>
                <p>Veja os imóveis em destaque que temos por aqui.</p>
                <div className={style.button}>
                    <a href="">Ver destaques <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Destaques