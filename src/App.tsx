import { useState } from 'react'
import './App.css'


interface Todo {
  id: string
  tarea: string
  completado: boolean
}

function App() {
  const [input, setInput] = useState<string>('')
  const [tarea, setTarea] = useState<Todo[]>([])


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const agregarTarea = () => {
    const nuevaTarea: Todo = {
      id: Date.now().toString(),
      tarea: input,
      completado: false
    }
    setTarea([...tarea, nuevaTarea])
    setInput('')
  }

  const eliminarTarea = (id: string) => {
    setTarea(tarea.filter(t => t.id != id))
  }

  const toggleCompleted = (id: string) => {
    setTarea(tarea.map(t => t.id === id ? {...t, completado: !t.completado}: t
    ))


  }
  


  return (
    <>
    <input type="text" value={input} onChange={onChange} />
    <button onClick={agregarTarea }>agregar tarea</button>
    {tarea?.map(t => {
      return (
        <li onClick={() => toggleCompleted(t.id)} style={{textDecoration: t.completado ? 'line-through': 'none'}} key={t.id}>
          {t.tarea}
          <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
        </li>
      );
    })}
    </>
  )
  
}

export default App;
