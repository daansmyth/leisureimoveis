import style from './TimeCard.module.css'
//IMAGENS
import redeLinkedin from '../../assets/linkedin.png'

const TimeCard = ({ foto, nome, profissao, linkedin }) => {

  return (
    <div className={style.card}>
        <>
            <img src={foto} alt="" />
        </>
        <ul>
            <li>
                <h3>{nome}</h3>
            </li>
            <li>{profissao}</li>
            <li>
                <a href={linkedin} target='_blank'>
                    <img src={redeLinkedin} alt='LinkedIn' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default TimeCard