import { render } from 'react-dom'
import { Counter } from './components/counter'

export const App = () => {
  return (
    <>
      <Counter />
      <div>index</div>
    </>
  )
}

render(<App />, document.getElementById('root'))
