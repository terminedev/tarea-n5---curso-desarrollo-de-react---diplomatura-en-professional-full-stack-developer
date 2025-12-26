import { useContext, useState } from "react";
import { ContextoListaTareas } from '@/App';

export default function AgregadorTareas() {

    const [contenidoNuevaTarea, setContenidoNuevaTarea] = useState('');
    const { setListaTareas } = useContext(ContextoListaTareas);

    // Se crea una nueva tarea y se implementa en la lista llamando al useLocalStorage. 
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
                onChange={(e) => setContenidoNuevaTarea(e.target.value)}
                value={contenidoNuevaTarea}
            />

            <button
                type="submit"
            >
                +
            </button>
        </form>
    )
};