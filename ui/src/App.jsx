import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Claim from './components/Claim'
import SlideIn from './components/SlideIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Claim title='Collect Sticks on a daily basis. log into bandBindex on Web/Mobile App' />
    </>
  );
}

export default App
