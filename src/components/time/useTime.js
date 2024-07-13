import { useEffect, useState } from "react"

export const useTime = () => {
    const [time, setTime] = useState([]);
    const url = './data/Time.json'

    useEffect(() => {

        const fetchData = async () => {
            const resposta = await fetch(url)
            const data = await resposta.json();
            setTime(data);
        }
        fetchData();
    }, [])
    return { time }
}
