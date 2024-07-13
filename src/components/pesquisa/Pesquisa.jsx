import style from './Pesquisa.module.css'

const Pesquisa = () => {
    return (
        <div className={style.container}>
            <div className={style.pesquisa}>
                <h2>Encontre um imóvel para chamar de seu</h2>
                <h3>Comprar</h3>
                <hr />
                <ul className={style.filtro}>
                    <form action="">
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <label>
                                <p>Cidade</p>
                                <input type="text" placeholder='Busque por cidade' />
                            </label>
                        </li>
                        <li>
                            <i class="fa-solid fa-thumbtack"></i>
                            <label>
                                <p>Bairro</p>
                                <input type="text" placeholder='Busque por bairro' />
                            </label>
                        </li>
                        <>
                            <ul className={style.filtro__duplo}>
                                <li>
                                    <i class="fa-solid fa-brazilian-real-sign"></i>
                                    <label>
                                        <p>Valor até</p>
                                        <input type="text" placeholder='Digite um valor' />
                                    </label>
                                </li>
                                <li>
                                    <i class="fa-solid fa-bed"></i>
                                    <label>
                                        <p>Quartos</p>
                                        {/* <input type="text" /> */}
                                        <select name="" id="">
                                            <option value="1" selected>1 Quarto</option>
                                            <option value="2">2 Quartos</option>
                                            <option value="3">3 Quartos</option>
                                            <option value="4">4 Quartos+</option>
                                        </select>
                                    </label>
                                </li>
                            </ul>
                        </>
                        <div className={style.botao}>
                            <button type="submit">Buscar imóveis</button>
                        </div>
                    </form>
                </ul>
            </div>
        </div>
    )
}

export default Pesquisa