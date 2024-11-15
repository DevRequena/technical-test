import { Navigate, useRoutes } from 'react-router-dom';
import GuestGuard from '../auth/GuestGuard';
import AuthLoginForm from '../pages/AuthLoginForm';
import HomePage from '../pages/HomePage/HomePage';
import AuthGuard from '../auth/AuthGuard';


export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={'/login'} replace />, index: true },
        {
          path: 'login',
          element: (
            <GuestGuard>
              <AuthLoginForm/>
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: '/app',
      children: [
        { element: <Navigate to={'/app/home'} replace />, index: true },
        { 
          path: 'home',
          element: 
          <AuthGuard>
            <HomePage />
          </AuthGuard> 
        },
      ]
    }
  ])
};
