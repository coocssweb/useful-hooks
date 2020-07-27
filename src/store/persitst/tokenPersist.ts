export default {
  set: (value: string) => {
    localStorage.setItem('AUTH_TOKEN', value);
  },
  get: () => {
    localStorage.getItem('AUTH_TOKEN');
  },
  remove: () => {
    localStorage.removeItem('AUTH_TOKEN');
  },
};
