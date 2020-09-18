export const parserCookie: (cookie: string) => Record<string, string> = (
  cookie,
) => {
  return cookie
    .split(';')
    .map((value) => value.split('='))
    .reduce((acc, value) => {
      return {
        ...acc,
        [decodeURIComponent(value[0]).trim()]: decodeURIComponent(value[1]),
      };
    }, {});
};
