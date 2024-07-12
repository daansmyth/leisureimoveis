import style from './Time.module.css'
import TimeCard from './TimeCard'
import { useTime } from './useTime'

const Time = () => {
    const { time } = useTime();

    const btnLeft = () => {

    }

    return (
        <div className={style.container}>
            <>
            <h2>Nosso Time</h2>
            </>
            <div className={style.time}>
                {
                    time.map(membro => (
                        <TimeCard
                            key={membro.id}
                            foto={membro.foto}
                            nome={membro.nome}
                            profissao={membro.profissao}
                            linkedin={membro.linkedin}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Time