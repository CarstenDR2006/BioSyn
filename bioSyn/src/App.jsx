import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="navbar">
        <div class="hamburger" onClick={() => {
          const menu = document.getElementById('menu');
          menu.classList.toggle('menu-open');
        }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 class="header">BioSyn</h1>
      </div>
      <nav id="menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="pages/About.html">About</a></li>
          <li><a href="pages/Profile.html">Profile</a></li>
        </ul>
      </nav>

    </>

  )
}

export default App
