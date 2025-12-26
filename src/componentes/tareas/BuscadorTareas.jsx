import { useEffect, useRef, useContext } from "react";
import { ContextoListaTareas } from '@/App';

export default function BuscadorTareas() {

    // Se realiza un auto-focus en el primer montaje:
    const campoBusqueda = useRef(null);

    useEffect(() => campoBusqueda.current.focus(), []);

    const { setConsultaContenidoTarea } = useContext(ContextoListaTareas);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="entradaConsulta">Buscar tarea:</label>
            <input
                type='text'
                id="entradaConsulta"
                name="entradaConsulta"
                required
                minLength="3"
                maxLength="20"
                placeholder="Contenido de la tarea..."
                ref={campoBusqueda}
                onChange={(e) => setConsultaContenidoTarea(e.target.value)}
            />
        </form>
    )
};