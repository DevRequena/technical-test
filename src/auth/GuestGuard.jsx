
import { Navigate } from 'react-router-dom';
import useAuthStore from './authStore';


export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }

  return <>{children}</>;
}
