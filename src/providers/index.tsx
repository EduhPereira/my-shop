import { ReactNode } from "react";
import { CartProvider } from "./cartProvider";
import { UserProvider } from "./userProvider";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
