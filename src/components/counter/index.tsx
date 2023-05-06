import { useState } from 'react'
import './style.scss'
export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      {count}
      <button onClick={() => setCount((prevState) => ++prevState)}>
        {' '}
        Count
      </button>
    </>
  )
}
