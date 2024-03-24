import { Store } from '@/types/store';
import { mutate } from 'swr';

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const setCurrentStore = (store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  };

  const clearCurrentStore = () => {
    mutate(CURRENT_STORE_KEY, null);
  };

  return { setCurrentStore, clearCurrentStore };
};

export default useCurrentStore;
