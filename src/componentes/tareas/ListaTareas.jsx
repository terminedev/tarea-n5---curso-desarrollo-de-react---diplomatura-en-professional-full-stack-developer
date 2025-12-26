import estilos from '../estilos/tareas/ListaTareas.module.css'
import Tarea from '@componentes/tareas/Tarea';
import React, { useCallback, useContext } from 'react';
import { ContextoListaTareas } from '@/App'

const TareaMemorizada = React.memo(Tarea);

export default function ListaTareas() {

    const { setListaTareas, tareasFiltradasContenido, cantidadTareasCompletadas } = useContext(ContextoListaTareas);

    // Manejos
    const manejarEliminacionTarea = useCallback((id = '') => {
        setListaTareas(listaPrevia => listaPrevia.filter(tarea => tarea.id !== id));
    }, [setListaTareas]);

    const manejarCambioEstadoCompletada = useCallback((id = '') => {
        setListaTareas(listaPrevia =>
            listaPrevia.map(tarea => tarea.id === id ? { ...tarea, estaCompletada: !tarea.estaCompletada } : tarea
            ));
    }, [setListaTareas]);


    // Si NO hay contenido en la lista: 
    if (tareasFiltradasContenido.length <= 0) return (
        <p className={estilos.alerta}>No hay tareas pendientes.</p>
    );

    // Si hay contenido: 
    return (
        <>
            <ul className={estilos.lista}>
                {tareasFiltradasContenido.map(tarea => (
                    <TareaMemorizada
                        key={tarea.id}
                        id={tarea.id}
                        contenido={tarea.contenido}
                        estaCompletada={tarea.estaCompletada}
                        eliminarTarea={manejarEliminacionTarea}
                        modificarEstadoCompletada={manejarCambioEstadoCompletada}
                    />
                ))}
            </ul>
            <article className={estilos.contadorTareasCompletadas}>
                Tareas completadas: {cantidadTareasCompletadas} / {tareasFiltradasContenido.length}
            </article>
        </>
    )
};