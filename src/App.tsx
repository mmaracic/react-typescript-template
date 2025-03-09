import { Theme } from '@radix-ui/themes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'

function App() {
  const baseUrl = import.meta.env.VITE_SERVER + "/messages"



  return (
    <Theme>
      <Header />
    </Theme>
  )
}

export default App
