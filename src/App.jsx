import { useState } from 'react'
import HeroPage from './components/HeroPage/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroPage/>
    </>
  )
}

export default App
