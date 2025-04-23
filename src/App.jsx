import { useState } from 'react'
import './App.css'
import DashBoard from './pages/DashBoard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';


function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/integrations" element={<Integrations />} />
    </Routes>
  </Router>
  )
}

export default App