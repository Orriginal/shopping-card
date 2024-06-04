import { create } from 'zustand';
import { Item } from '../generated/Graphql';

interface ShoppingCartState {
    cartItems: Item[];
    isCartOpen: boolean;
    toggleCart: () => void;
    addItemToCard: (items: Item) => void;
    setCartItems: (items: Item[]) => void;
    emptyCard: () => void;
}

/**
 * Store items in the shopping cart.
 */
export const useShoppingCart = create<ShoppingCartState>()((set) => ({
    cartItems: [],
    isCartOpen: false,
    setCartItems: (items) => set({ cartItems: items }),
    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    addItemToCard: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    emptyCard: () => set({ cartItems: [] }),
}));
