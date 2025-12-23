import { useEffect, useState } from "react";

export default function useLocalStorage(llave = 'listaTareas', valorInicial = []) {

    const [listaTareas, setListaTareas] = useState(() => {
        const datos = localStorage.getItem(llave);
        return datos ? JSON.parse(datos) : valorInicial;
    });

    useEffect(() => {
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
    }, [listaTareas]);

    return [listaTareas, setListaTareas];
};