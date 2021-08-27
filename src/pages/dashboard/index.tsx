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

export const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState<String>("Products");
  const history = useHistory();

  const changeComponent = (component: string) => {
    setCurrentComponent(component);
  };
  return (
    <>
      <Header>
        <ProductsBtn onClick={() => changeComponent("Products")}>
          Products
        </ProductsBtn>
        <CartBtn onClick={() => changeComponent("Cart")}>Cart</CartBtn>
        <LogoffBtn onClick={() => history.push("/")}>Logoff</LogoffBtn>
      </Header>
      <CurrentComponent>{currentComponent}</CurrentComponent>
      {currentComponent === "Products" ? <ProductsList /> : <CartList />}
    </>
  );
};
