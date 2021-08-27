import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  name: string;
  image_url: string;
  price: number;
  description: string;
  id: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cartList: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCartList([...cartList, product]);
  };

  const removeProduct = (product: Product) => {
    const newList = cartList.filter((element) => element.name !== product.name);
    setCartList(newList);
  };

  return (
    <CartContext.Provider value={{ cartList, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
