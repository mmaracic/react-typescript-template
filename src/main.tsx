import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

embedReact(window.document);

function embedReact(input: Document) {
  const rootNode = input.getElementById('root') as HTMLElement
  if (rootNode !== null) {
    ReactDOM.createRoot(rootNode).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  } else {
    console.error('Root node not found')
  }
}

export { embedReact }
