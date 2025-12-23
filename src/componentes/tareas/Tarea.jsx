export default function Tarea({
    id,
    contenido,
    estaCompletada,
    eliminarTarea
}) {

    return (
        <article>
            <small>ID: {id}</small>
            <p>{contenido}</p>

            <button
                type="button"
            // onClick={ }
            >
                ✓
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