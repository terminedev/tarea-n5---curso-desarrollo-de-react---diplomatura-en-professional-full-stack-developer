import './App.css';
import { createContext, useMemo, useState } from 'react';
import ListaTareas from '@componentes/tareas/ListaTareas';
import AgregadorTareas from '@componentes/tareas/AgregadorTareas';
import BuscadorTareas from '@componentes/tareas/BuscadorTareas';
import useLocalStorage from '@hooks/use-local-storage';

// Se crea el contexto de Lista de Tareas:
export const ContextoListaTareas = createContext(null);

// Se exporta el App:
export default function App() {

  const [listaTareas, setListaTareas] = useLocalStorage('listaTareas', []);

  const [consultaContenidoTarea, setConsultaContenidoTarea] = useState('');


  /* 
    Memorizamos el filtrado por contenido de tareas para que 
    solo busque resultado nuevos al escribir una nueva petición y respetando 
    un mínimo de caracteres. 
  */
  const tareasFiltradasContenido = useMemo(() => {
    if (consultaContenidoTarea.trim().length < 3) return listaTareas;

    return listaTareas.filter(tarea =>
      tarea.contenido.toLowerCase().includes(consultaContenidoTarea.toLowerCase())
    );
  }, [listaTareas, consultaContenidoTarea]);


  // Cuenta cuántas tareas están completadas.
  const cantidadTareasCompletadas = useMemo(() => {

    let cantidad = 0;
    tareasFiltradasContenido.forEach(tarea => tarea.estaCompletada ? cantidad++ : cantidad);
    return cantidad;

  }, [tareasFiltradasContenido])


  // Memorizamos el contexto para que sea indepenedie del render del App.jsx
  const contextoListaMemorizada = useMemo(() => ({
    listaTareas,
    setListaTareas,
    tareasFiltradasContenido,
    setConsultaContenidoTarea,
    cantidadTareasCompletadas
  }), [listaTareas, setListaTareas, tareasFiltradasContenido, setConsultaContenidoTarea, cantidadTareasCompletadas]);


  return (
    <ContextoListaTareas.Provider value={contextoListaMemorizada}>
      <main>
        <BuscadorTareas />
        <AgregadorTareas />
        <ListaTareas />
      </main>
    </ContextoListaTareas.Provider>
  );
};

