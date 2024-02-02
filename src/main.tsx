import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layouts/Header.tsx'
import Footer from './layouts/Footer.tsx'
import Chat from './layouts/Chat.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="font-mono">
            <Header />
            <Chat />
            <Footer />
        </div>
    </React.StrictMode>,
);
