import { useState } from "react";
import useLocalStorage from '@hooks/use-local-storage';

export default function AgregadorTareas() {

    const [contenidoNuevaTarea, setContenidoNuevaTarea] = useState('');
    const [, setListaTareas] = useLocalStorage();

    const manejarAgregadorTareas = (e) => {
        e.preventDefault();

        const nuevaTarea = {
            id: crypto.randomUUID(),
            contenido: contenidoNuevaTarea,
            estaCompletada: false
        }

        setListaTareas(listaPrevia => [...listaPrevia, nuevaTarea]);

        setContenidoNuevaTarea('');
    };

    return (
        <form onSubmit={(e) => manejarAgregadorTareas(e)}>
            <label htmlFor="entradaContenidoNuevaTarea">Agregar tarea:</label>
            <input
                type='text'
                id="entradaContenidoNuevaTarea"
                name="entradaContenidoNuevaTarea"
                required
                minLength="3"
                maxLength="20"
                placeholder="Ej: Limpiar mi habitación."
                ref={contenidoNuevaTarea}
                onChange={(e) => setContenidoNuevaTarea(e.target.value)}
            />

            <button
                type="submit"
            >
                +
            </button>
        </form>
    )
};