import React, { useState } from 'react'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Dashboard from './pages/Dashboard'
import ActiveThreats from './pages/ActiveThreats'
import ReportEmergency from './pages/ReportEmergency'
import CommanderCenter from './pages/CommanderCenter'
import IncidentResponseView from './pages/IncidentResponseView'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
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
        
        <div className="flex-1 flex flex-col min-w-0 relative">
          <TopNav user={user} />
          
          <main className="flex-1 overflow-y-auto p-6 md:p-8">
            <Routes>
              {/* Coordinator Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator']}>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/coordinator" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator']}>
                  <CommanderCenter user={user} />
                </ProtectedRoute>
              } />
              <Route path="/alerts" element={
                <ProtectedRoute user={user} allowedRoles={['coordinator', 'responder']}>
                  <ActiveThreats />
                </ProtectedRoute>
              } />

              {/* Responder Routes */}
              <Route path="/incidents" element={
                <ProtectedRoute user={user} allowedRoles={['responder']}>
                  <IncidentResponseView />
                </ProtectedRoute>
              } />

              {/* Civilian Routes */}
              <Route path="/sos" element={
                <ProtectedRoute user={user} allowedRoles={['civilian', 'coordinator']}>
                  <ReportEmergency />
                </ProtectedRoute>
              } />

              {/* Common Routes */}
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

              {/* Redirects based on role */}
              <Route path="/" element={
                user.role === 'coordinator' ? <Navigate to="/dashboard" replace /> :
                user.role === 'responder' ? <Navigate to="/incidents" replace /> :
                <Navigate to="/sos" replace />
              } />
              
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🚧</span>
                  </div>
                  <p className="italic">This module is currently being deployed...</p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="mt-4 text-emerald-600 font-bold hover:underline"
                  >
                    Return Home
                  </button>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
=======
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { AnimatePresence, motion } from 'framer-motion'

const INITIAL_INCIDENTS = [
  { id: 'INC-701', type: 'Structural Fire', lat: 26.1445, lng: 91.7362, status: 'detected', severity: 'high' },
  { id: 'INC-702', type: 'Medical Emergency', lat: 26.1158, lng: 91.7086, status: 'dispatched', severity: 'medium' },
  { id: 'INC-703', type: 'Power Failure', lat: 26.1850, lng: 91.7250, status: 'detected', severity: 'low' },
]

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
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

  return (
    <div className="h-screen bg-brand-bg text-slate-300 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Login onLogin={handleLogin} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full"
          >
            <Sidebar 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              onLogout={handleLogout}
            />
            
            <div className="flex-1 flex flex-col min-w-0 relative h-full">
              {/* Scanline Effect Overlay (Subtle) */}
              <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
              
              <TopNav />
              
              <main className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'dashboard' && (
                      <Dashboard 
                        incidents={incidents} 
                        onUpdateStatus={updateIncidentStatus}
                      />
                    )}
                    {activeTab !== 'dashboard' && (
                      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                        <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 tactical-glow">
                          <span className="text-3xl animate-pulse">🚧</span>
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest">Protocol Segment Encrypted</h3>
                        <p className="text-slate-500 mt-2 max-w-sm font-mono text-xs leading-relaxed">
                          Module '{activeTab.toUpperCase()}' is currently under development or restricted by administrative clearance levels.
                        </p>
                        <button 
                          onClick={() => setActiveTab('dashboard')}
                          className="mt-8 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] border border-brand-primary/20 px-6 py-2.5 rounded-lg hover:bg-brand-primary/10 transition-colors"
                        >
                          Return to Ops_Center
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
>>>>>>> origin/main
  )
}

export default App
