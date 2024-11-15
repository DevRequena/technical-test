// authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosCreateContext from '../utils/axiosCreateContext';

const isClient = typeof window !== 'undefined';

const useAuthStore = create(
  persist(
    (set) => ({
      isInitialized: false,
      isAuthenticated: false,
      user: null,

      initialize: async () => {
        if (!isClient) return;

        const accessToken = localStorage.getItem('token');

        if (accessToken) {
          set({
            isInitialized: true,
            isAuthenticated: true,
          });
        } else {
          set({
            isInitialized: true,
            isAuthenticated: false,
          });
        }
      },

      login: async (email, password) => {
        try {
          const response = await axiosCreateContext.post('/login', { email, password });
          const { token } = response.data;

          localStorage.setItem('token', token);

          set({
            isAuthenticated: true,
            isInitialized: true,
          });
        } catch (error) {
          console.error("Error durante el login", error);
        }
      },

      logout: () => {
        if (isClient) {
          localStorage.removeItem('token');
        }
        set({
          isAuthenticated: false,
          isInitialized: false,
        });
      },
    }),
    {
      name: 'auth',
    }
  )
);

export default useAuthStore;
