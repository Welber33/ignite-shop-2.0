import { createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeCartItem: (productId: string) => void;
  checkItemExistsInCart: (productId: string) => boolean;
  cartTotal: number;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    setCartItems(state => [...state, product]);
  }

  function removeCartItem(productId: string) {
    setCartItems(state => state.filter((item) => item.id !== productId));
  }

  function checkItemExistsInCart(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        checkItemExistsInCart,
        removeCartItem,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}