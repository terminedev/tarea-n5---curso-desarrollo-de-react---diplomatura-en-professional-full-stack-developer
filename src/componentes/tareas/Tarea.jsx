import estilos from '../estilos/tareas/Tarea.module.css'
import estiloBoton from '@estilos/BotonInput.module.css'

export default function Tarea({
    id,
    contenido,
    estaCompletada,
    eliminarTarea,
    modificarEstadoCompletada
}) {

    // Que la función modificarEstadoCompletada esté en el article es intencional.
    return (
        <article
            onClick={() => modificarEstadoCompletada(id)}
            style={{
                border: estaCompletada ? 'solid .1rem rgb(30, 252, 237)' : 'solid .1rem rgb(74, 72, 72)',
            }}
            className={estilos.tarea}
        >
            <small className={estilos.identificador}>ID: {id}</small>
            <p className={estilos.cotenido}>{contenido}</p>

            <div className={estilos.contenidoBotones}>
                <button
                    style={{
                        color: estaCompletada ? 'rgb(30, 252, 237)' : 'rgb(74, 72, 72)',
                        border: 'none',
                    }}
                    className={estiloBoton.BotonInput}
                >
                    ✓
                </button>

                <button
                    style={{
                        color: 'rgb(252, 69, 30)',
                        border: 'none'
                    }}
                    className={estiloBoton.BotonInput}
                    type="button"
                    onClick={() => eliminarTarea(id)}
                >
                    ⨉
                </button>
            </div>
        </article>
    )
}