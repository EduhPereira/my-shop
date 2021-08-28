import { ProductsList } from "../../components/ProductsList";
import { CartList } from "../../components/CartList";
import {
  Header,
  ProductsBtn,
  CartBtn,
  LogoffBtn,
  CurrentComponent,
} from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { useUser } from "../../providers/userProvider";
import { CgLogOff, CgShoppingCart } from "react-icons/cg";
import { BiStore } from "react-icons/bi";

export const Dashboard = () => {
  const { setIsLogged } = useUser();
  const [currentComponent, setCurrentComponent] = useState<String>("Products");
  const history = useHistory();

  const changeComponent = (component: string) => {
    setCurrentComponent(component);
  };

  const handleLogoff = () => {
    history.push("/");
    setIsLogged(false);
    localStorage.clear();
  };

  return (
    <>
      <Header>
        <ProductsBtn onClick={() => changeComponent("Products")}>
          <BiStore />
        </ProductsBtn>
        <CartBtn onClick={() => changeComponent("Cart")}>
          <CgShoppingCart />
        </CartBtn>
        <LogoffBtn onClick={handleLogoff}>
          <CgLogOff />
        </LogoffBtn>
      </Header>
      <CurrentComponent>{currentComponent}</CurrentComponent>
      {currentComponent === "Products" ? <ProductsList /> : <CartList />}
    </>
  );
};
