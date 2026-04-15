import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import CivilianDashboard from './pages/CivilianDashboard'
import ResponderDashboard from './pages/ResponderDashboard'
import CoordinatorDashboard from './pages/CoordinatorDashboard'
import ActiveThreats from './pages/ActiveThreats'
import CommanderCenter from './pages/CommanderCenter'
import MapView from './pages/MapView'
import ResponderIncidents from './pages/ResponderIncidents'
import ResponderNavigation from './pages/ResponderNavigation'

const INITIAL_INCIDENTS = [
  { id: 'INC-701', type: 'Structural Fire', lat: 26.1445, lng: 91.7362, status: 'detected', severity: 'high' },
  { id: 'INC-702', type: 'Medical Emergency', lat: 26.1158, lng: 91.7086, status: 'dispatched', severity: 'medium' },
  { id: 'INC-703', type: 'Power Failure', lat: 26.1850, lng: 91.7250, status: 'detected', severity: 'low' },
]

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('omni_user');
    return saved ? JSON.parse(saved) : null;
  })
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS)

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('omni_user', JSON.stringify(userData));
  }

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('omni_user');
    localStorage.clear();
    sessionStorage.clear();
  }

  const updateIncidentStatus = (id, newStatus) => {
    if (newStatus === 'resolved') {
      setIncidents(prev => prev.filter(inc => inc.id !== id))
    } else {
      setIncidents(prev => prev.map(inc => 
        inc.id === id ? { ...inc, status: newStatus } : inc
      ))
    }
  }

  // If not logged in, only show Login page
  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
        <Sidebar user={user} onLogout={handleLogout} />
        
        <div className="flex-1 flex flex-col min-w-0 relative h-full">
          <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.01] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
          
          <TopNav user={user} />
          
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <Routes>
              {/* Universal Profile Route */}
              <Route path="/profile" element={
                <ProtectedRoute user={user}>
                  <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
                    <p className="italic text-emerald-600 font-mono uppercase text-xs mt-1">{user.role} ACCESS</p>
                  </div>
                </ProtectedRoute>
              } />

              {/* Role-Based Dashboard Root */}
              <Route path="/" element={
                user.role === 'civilian' ? <CivilianDashboard /> :
                user.role === 'responder' ? <ResponderIncidents /> :
                <CoordinatorDashboard incidents={incidents} onUpdateStatus={updateIncidentStatus} />
              } />

              {/* Explicit Routes with Protection */}
              <Route path="/sos" element={
                <ProtectedRoute user={user} allowedRoles={['civilian']}>
                  <CivilianDashboard />
                </ProtectedRoute>
              } />
              <Route path="/status" element={
                <ProtectedRoute user={user} allowedRoles={['civilian']}>
                  <CivilianDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/incidents" element={
                <ProtectedRoute user={user} allowedRoles={['responder']}>
                  <ResponderIncidents />
                </ProtectedRoute>
              } />

              <Route path="/dashboard" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator']}>
                  <CoordinatorDashboard incidents={incidents} onUpdateStatus={updateIncidentStatus} />
                </ProtectedRoute>
              } />
              
              <Route path="/maps" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator', 'responder']}>
                  {user.role === 'coordinator' ? <MapView incidents={incidents} /> : <ResponderNavigation />}
                </ProtectedRoute>
              } />

              <Route path="/coordinator" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator']}>
                  <CommanderCenter user={user} />
                </ProtectedRoute>
              } />
              <Route path="/alerts" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator']}>
                  <ActiveThreats />
                </ProtectedRoute>
              } />

              {/* Redirect any other match to root */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

// Update the root redirect logic if needed (it's inside the "/" route)

export default App
