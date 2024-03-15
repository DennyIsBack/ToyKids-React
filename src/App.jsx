import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppRoutes from './Routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App
