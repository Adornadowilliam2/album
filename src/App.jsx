import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const data = [1,2,3,4,56,7,8];
  const [rows, setRows] = useState(data)
  const shuffleArr = (arr) => {
    const newArr = [...arr];
    for (let i =  newArr.length - 1; i > 0; i--){
      const random = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[random]] = [newArr[random], newArr[i]]
    }
    return newArr
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setRows((current) => shuffleArr(current))
    }, 1000 );

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {rows.map((item)=> (
        <h1 key={item}>{item}</h1>
      ))}
    </>
  )
}

export default App
