import { parserCookie } from '@/helpers/cookie';
import {  } from 'rxjs/ajax';

export const isAuthenticated: () => boolean = () => {
  const cookie = parserCookie(document.cookie);
  return cookie.isAuthenticated === 'true';
};

interface LoginPayload {
  email: string;
  password: string;
}
