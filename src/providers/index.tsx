import { ReactNode } from "react";
import { CartProvider } from "./cartProvider";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return <CartProvider>{children}</CartProvider>;
};
