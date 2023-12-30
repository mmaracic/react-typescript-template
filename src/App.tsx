import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Message {
  id: number
  message: string
}

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  const theme = createTheme();
  const baseUrl = import.meta.env.VITE_SERVER + "/messages"
  

  useEffect(() => {
    const fetchMessage = async (url: string) => {
      try{
        const response: Response = await fetch(url).then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response
        })
        const message: Message = await response.json() as Message
        setMessage(message.message)  
      } catch (error) {
        setMessage((error as Error).message)
      }
    }
    
    const url = baseUrl + "/" + count
    fetchMessage(url)
  }, [baseUrl, count])

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
        <h3>Message: {message}</h3>
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
