import style from './Header.module.css'
import { useHeader } from './useHeader'
//IMAGENS
import logo from '../../assets/logo-leisure.svg'

const Header = () => {

    const { visivel, btnClose, btnHamburguer } = useHeader()

    return (
        <div className={style.header}>
            <div>
                <i className="fa-solid fa-bars fa-2xl pointer" onClick={btnHamburguer}></i>
            </div>
            <div className={style.header__menu} style={{ left: visivel ? '0' : '-500vw' }}>
                <div>
                    <a href="/leisureimoveis">
                        <img src={logo} alt="Página inicial" />
                    </a>
                </div>
                <div className={style.lista}>
                    <ul>
                        <li>Categorias</li>
                        <li>Premium</li>
                        <li>Anunciar</li>
                        <li>Links úteis</li>
                        <li>Nosso App</li>
                    </ul>
                    <>
                        <a href="#">Login</a>
                    </>
                    <span onClick={btnClose}>
                        <i className="fa-solid fa-xmark fa-2xl pointer"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header