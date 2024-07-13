import style from './Footer.module.css'
//IMAGENS
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                {/* <img src="" alt='Logo da Leisure Imóveis' /> */}
                <p>&copy; Leisure Imóveis 2024, uma empresa fictícia sem fins lucrativos.</p>
            </div>
            <div className={style.social}>
                <a href="https://facebook.com" target='_blank'>
                    <img src={facebook} alt='Facebook Leisure Imóveis' />
                </a>
                <a href="https://instagram.com" target='_blank'>
                    <img src={instagram} alt='Instagram Leisure Imóveis' />
                </a>
            </div>
        </div>
    )
}

export default Footer