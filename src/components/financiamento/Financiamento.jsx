import style from './Financiamento.module.css';
//IMAGENS
import fiador from '../../assets/financiamento/sem-fiador.svg'
import bradesco from '../../assets/financiamento/bradesco.svg'
import caixa from '../../assets/financiamento/caixa.svg'
import itau from '../../assets/financiamento/itau.svg'

const Financiamento = () => {
    return (
        <div className={style.financiamento}>
            <>
                <img src={fiador} alt="Imagem de homem relaxando em uma poltrona" />

                <div className={style.content}>
                    <h2>O que acha de um financiamento?</h2>
                    <p>O financiamento é uma das opções para se conseguir o imóvel tão sonhado.</p>
                    <p>Veja abaixo algumas instituições financeiras que você pode simular um financiamento</p>
                </div>
            </>
            <div className={style.financeiras}>
                <a href="" target='_blank'>
                    <img src={bradesco} alt="Banco Bradesco" />
                </a>
                <a href="" target='_blank'>
                    <img src={caixa} alt="Caixa Economica Federal" />
                </a>
                <a href="" target='_blank'>
                    <img src={itau} alt="Banco Itaú" />
                </a>
            </div>
        </div>
    )
}

export default Financiamento