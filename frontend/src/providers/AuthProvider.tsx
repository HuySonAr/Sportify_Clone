import { axiosInstance } from '@/lib/axios';
import { useAuth } from '@clerk/react';
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useChatStore } from '@/stores/useChatStore';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const { checkAdminStatus } = useAuthStore();
  const { initSocket, disconnectSocket } = useChatStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        console.log('token: ' + token);
        if (token) {
          await checkAdminStatus();
          // init socket
          if (userId) initSocket(userId);
        }
      } catch (error: any) {
        console.log('Error in auth provider', error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();

    // clean up
    return () => disconnectSocket();
  }, [getToken, userId, checkAdminStatus, initSocket, disconnectSocket]);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        const token = await getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [getToken]);

  if (loading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );

  return <>{children}</>;
};

export default AuthProvider;
