import { create } from 'zustand';
import { Item } from '../generated/Graphql';
interface StoreItemState {
    defaultItems: Item[];
    filteredItems: Item[];
    isLoading: boolean;
    setStoredFilteredItems: (items: Item[]) => void;
    setStoredItems: (items: Item[]) => void;
    setIsLoading: (isLoading: boolean) => void;
}

export const useStoreItems = create<StoreItemState>()((set) => ({
    defaultItems: [],
    filteredItems: [],
    isLoading: true,
    setStoredFilteredItems: (items) => set({ filteredItems: items }),
    setStoredItems: (items) => set({ defaultItems: items }),
    setIsLoading: (isLoading) => set({ isLoading }),
}));
