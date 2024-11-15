import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// components
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './query-client.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </QueryClientProvider>
)
