import { useState } from 'react'
import './App.css'




function App() {
  const [inpt, setInpt] = useState<string>('')

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setInpt(e.target.value)
    }
  }



  return (
    <>
    <input value={inpt} type='text' onChange={Onchange}/>
    <p>{inpt}</p>
    
    </>
  )
  
}

export default App;
