import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Messages from './message.tsx'
import ChatApp from './chat.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Messages />
        <ChatApp />
    </React.StrictMode>,
)
