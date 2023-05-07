import { useState } from 'react'
import styles from './style.module.scss'
export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      {count}
      <button
        className={styles.button}
        onClick={() => setCount((prevState) => ++prevState)}
      >
        {' '}
        Count
      </button>
    </>
  )
}
