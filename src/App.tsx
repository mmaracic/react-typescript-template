import { Theme } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './pages/Header'
import { css } from '../styled-system/css';

function App() {
  const appTitle = import.meta.env.VITE_APP_TITLE



  return (
    <Theme>
      <Header />
      <img src={reactLogo} alt="react logo" />
      <img src={viteLogo} alt="vite logo" />
      <div className={css({ color: "blue", fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼 from {appTitle}!</div>
    </Theme>
  )
}

export default App
