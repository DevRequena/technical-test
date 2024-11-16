import { Navigate, useRoutes } from 'react-router-dom';
import GuestGuard from '../auth/GuestGuard';
import AuthLoginForm from '../pages/AuthLoginForm';
import HomePage from '../pages/HomePage/HomePage';
import LocationPage from '../pages/LocationPage/LocationPage';
import BlogPage from '../pages/BlogPage/BlogPage';
import AuthGuard from '../auth/AuthGuard';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import FranchisePage from '../pages/FranchisePage/FranchisePage';
import Error404 from '../pages/Error/Error404';

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
        },
        {
          path: '*',
          element: <Error404 />
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
        { 
          path: 'location',
          element: 
          <AuthGuard>
            <LocationPage />
          </AuthGuard> 
        },
        { 
          path: 'blog',
          element: 
          <AuthGuard>
            <BlogPage />
          </AuthGuard> 
        },
        { 
          path: 'services',
          element: 
          <AuthGuard>
            <ServicesPage />
          </AuthGuard> 
        },
        { 
          path: 'about-us',
          element: 
          <AuthGuard>
            <AboutPage />
          </AuthGuard> 
        },
        { 
          path: 'franchise-with-us',
          element: 
          <AuthGuard>
            <FranchisePage />
          </AuthGuard> 
        },
        {
          path: '*',
          element: <Error404 />
        }
      ]
    }
  ])
};
