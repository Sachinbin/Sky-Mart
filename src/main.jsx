import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute.jsx'
import { SecurityProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <SecurityProvider>
    <AppRoute />
  </SecurityProvider>

)
