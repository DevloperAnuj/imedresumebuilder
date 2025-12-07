import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumeBuilder from './ResumeBuilder.jsx'
import './index.css'
import './firebase' // Initialize Firebase and Analytics

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ResumeBuilder />
    </React.StrictMode>,
)
