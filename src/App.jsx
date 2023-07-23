import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Products from './Components/Products/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header></Header>
        <Shop></Shop>
        <Products></Products>
      </div>

    </>
  )
}

export default App
