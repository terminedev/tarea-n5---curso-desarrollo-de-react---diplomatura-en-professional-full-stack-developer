import './App.css';
import ListaTareas from '@componentes/tareas/ListaTareas';
import AgregadorTareas from '@componentes/tareas/AgregadorTareas';
import BuscadorTareas from '@componentes/tareas/BuscadorTareas';
import { createContext, useMemo } from 'react';
import useLocalStorage from '@hooks/use-local-storage';

export const ContextoListaTareas = createContext(null);

export default function App() {

  const [listaTareas, setListaTareas] = useLocalStorage('listaTareas', []);

  const contextoListaMemorizada = useMemo(() => ({
    listaTareas, setListaTareas
  }), [listaTareas, setListaTareas]);

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

