import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import ResumeBuilder from './ResumeBuilder.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import TermsOfService from './TermsOfService.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import TipsPage from './TipsPage.jsx'
import TipDetailPage from './TipDetailPage.jsx'
import './index.css'
import './firebase' // Initialize Firebase and Analytics

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/builder" element={<ResumeBuilder />} />
                <Route path="/tips" element={<TipsPage />} />
                <Route path="/tips/:slug" element={<TipDetailPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
