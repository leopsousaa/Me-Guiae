import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AuthProvider from './context/authContext'

import Routes from './routes'

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
)

export default App
