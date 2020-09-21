import { parserCookie } from '@/helpers/cookie';
import { http } from '@/plugins/axios';

export const isAuthenticated: () => boolean = () => {
  const cookie = parserCookie(document.cookie);
  return cookie.isAuthenticated === 'true';
};

interface LoginPayload {
  email: string;
  password: string;
}

export const login: (loginPayload: LoginPayload) => Promise<object> = (
  loginPayload,
) => {
  return http.post('/api/auth/login', {
    email: loginPayload.email,
    password: loginPayload.password,
  });
};
