import { useState } from "react";

export const useHeader = () => {
    const [visivel, setVisivel] = useState()

    const btnClose = () => {
        setVisivel(false);
    }
    const btnHamburguer = () => {
        setVisivel(true);
    }

    return { visivel, btnClose, btnHamburguer}
}
