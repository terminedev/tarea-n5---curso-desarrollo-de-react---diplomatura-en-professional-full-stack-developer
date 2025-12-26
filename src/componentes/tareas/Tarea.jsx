export default function Tarea({
    id,
    contenido,
    estaCompletada,
    eliminarTarea,
    modificarEstadoCompletada
}) {

    return (
        <article>
            <small>ID: {id}</small>
            <p>{contenido}</p>

            <button
                type="button"
                onClick={() => modificarEstadoCompletada(id)}
            >
                ✓ {estaCompletada ? 'Completada' : 'No Completada'}
            </button>

            <button
                type="button"
                onClick={() => eliminarTarea(id)}
            >
                ⨉
            </button>
        </article>
    )
}