import { useEffect, useRef, useState } from "react";

export default function BuscadorTareas() {

    const [consulta, setConsulta] = useState('');

    const campoBusqueda = useRef(null);

    useEffect(() => campoBusqueda.current.focus(), []);

    return (
        <form>
            <label htmlFor="entradaConsulte">Buscar tarea:</label>
            <input
                type='text'
                id="entradaConsulte"
                name="entradaConsulte"
                required
                minLength="3"
                maxLength="20"
                placeholder="Contenido de la tarea..."
                ref={campoBusqueda}
                onChange={(e) => setConsulta(e.target.value)}
            />
        </form>
    )
};