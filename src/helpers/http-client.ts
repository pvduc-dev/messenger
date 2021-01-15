import { ajax, AjaxRequest } from 'rxjs/ajax';

const httpConfig: AjaxRequest  = {
  withCredentials: true,
}

export const get = () => {
  return ajax.get('/', {
  })
}
