import { createContext, useContext, useState, type ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  priceNum: number;
  img: string | null;
  emoji: string;
  qty: number;
  color: string;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: number[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  toggleWishlist: (id: number) => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  cartCount: number;
  wishlistCount: number;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id && c.color === item.color);
      if (existing) {
        return prev.map(c => c.id === item.id && c.color === item.color ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(c => c.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty } : c));
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const wishlistCount = wishlist.length;

  return (
    <StoreContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQty, toggleWishlist, cartOpen, setCartOpen, cartCount, wishlistCount }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
