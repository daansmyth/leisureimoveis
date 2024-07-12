import style from './Sobre.module.css';
//IMAGENS
import escritorio from '../../assets/escritorio.png'

const Sobre = () => {
    return (
        <div className={style.container}>
            <>
                <h2>Sobre a Leisure Imóveis</h2>
            </>
            <div className={style.sobre}>
                <>
                    <img src={escritorio} alt="Imagem do nosso escritório" />
                </>
                <div className={style.content}>
                    <ul>
                        <li>
                            <h3>Compromisso</h3>
                        </li>
                        <li>
                            <p>Na Leisure Imóveis estamos empenhados em ajudar você a encontrar o lar perfeito, onde possa criar memórias preciosas e viver momentos especiais.</p>
                        </li>
                        <li>
                            <p>Somos uma empresa especializada no mercado imobiliario sempre buscando o melhor para atender nossos clientes.</p>
                        </li>

                        <li>
                            <h3>Nossa missão</h3>
                        </li>
                        <li>
                            <p>Nossa missão é simplificar a busca por imóveis. Com um catálogo diversificado, que abrange desde apartamentos urbanos a casas espaçosas nos subúrbios, oferecemos opções para todos os estilos de vida e orçamentos.</p>
                        </li>

                        <li>
                            <h3>O que nos torna únicos</h3>
                        </li>

                        <li>
                            <p>Nos destacamos pelo nosso comprometimento com a qualidade e a satisfação do usuário</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <p>Contribuição com o meio ambiente</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <p>Tecnologias modernas</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <p>Facilidade de acesso</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <p>Selos de qualidade</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sobre