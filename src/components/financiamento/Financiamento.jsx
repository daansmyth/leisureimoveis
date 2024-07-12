import style from './Financiamento.module.css';

const Financiamento = () => {
    return (
        <div className={style.financiamento}>
            <>
                <img src="leisureimoveis/src/assets/financiamento/sem-fiador.svg" alt="Imagem de homem relaxando em uma poltrona" />

                <div className={style.content}>
                    <h2>O que acha de um financiamento?</h2>
                    <p>O financiamento é uma das opções para se conseguir o imóvel tão sonhado.</p>
                    <p>Veja abaixo algumas instituições financeiras que você pode simular um financiamento</p>
                </div>
            </>
            <div className={style.financeiras}>
                <a href="" target='_blank'>
                    <img src="leisureimoveis/src/assets/financiamento/bradesco.svg" alt="Banco Bradesco" />
                </a>
                <a href="" target='_blank'>
                    <img src="leisureimoveis/src/assets/financiamento/caixa.svg" alt="Caixa Economica Federal" />
                </a>
                <a href="" target='_blank'>
                    <img src="leisureimoveis/src/assets/financiamento/itau.svg" alt="Banco Itaú" />
                </a>
            </div>
        </div>
    )
}

export default Financiamento