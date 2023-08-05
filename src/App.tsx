import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme();


  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>Title: {import.meta.env.VITE_APP_TITLE}</h2>
        <h2>Mode: {import.meta.env.MODE}</h2>
        <Button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </Button>
        <Typography variant="h5">
          <p>
            Count is {count}
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p>
            Click on the Vite and React logos to learn more
          </p>
        </Typography>
      </ThemeProvider>
    </>
  )
}

export default App
