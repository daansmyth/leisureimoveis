import { useEffect, useState } from "react"

export const useTime = () => {
    const [time, setTime] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const resposta = await fetch('./src/data/Time.json')
            const data = await resposta.json();
            setTime(data);
        }
        fetchData();
    }, [])
    return { time }
}
