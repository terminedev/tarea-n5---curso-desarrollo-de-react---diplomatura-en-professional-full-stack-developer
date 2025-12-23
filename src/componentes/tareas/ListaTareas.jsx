import Tarea from '@componentes/tareas/Tarea';
import React, { useCallback, useContext } from 'react';
import { ContextoListaTareas } from '@App'

const TareaMemorizada = React.memo(Tarea);

export default function ListaTareas() {
    const { listaTareas, setListaTareas } = useContext(ContextoListaTareas);

    if (listaTareas.length <= 0) return (
        <p>No hay tareas pendientes.</p>
    )

    const manejarEliminacionTarea = useCallback((id = '') => {
        setListaTareas(listaPrevia => listaPrevia.filter(tarea => tarea.id !== id))
    }, [setListaTareas]);

    return (
        <ul>
            {listaTareas.map(tarea => (
                <TareaMemorizada
                    key={tarea.id}
                    id={tarea.id}
                    contenido={tarea.contenido}
                    estaCompletada={tarea.estaCompletada}
                    eliminarTarea={manejarEliminacionTarea}
                />
            ))}
        </ul>
    )
};