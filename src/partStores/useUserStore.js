import create from 'zustand';
import http from './http';

const initialUserState = {
  list: [],
  loaded: false,
  error: null,
};

const useUserStore = create((set, get) => ({
  data: initialUserState,
  fetchAllUser: async () => {
    const { loaded, list } = get();
    if (loaded) {
      return;
    }

    const response = await http.request({ path: 'https://www.shuxia123.com/services/classifies', delay: 500 });
    set({
      list: response.response || list,
      loaded: true,
      error: response.meta.code !== 0,
    });
  },
  fetchOneUser: () => {},
  updateUser: () => {},
  destroyUser: () => {
    set(initialUserState);
  },
}));

export default useUserStore;
