import { useCart } from "../../providers/cartProvider";
import { ProductCard } from "../ProductCard";
import { Container } from "./styles";

export const CartList = () => {
  const { cartList } = useCart();
  return (
    <Container>
      {cartList.map((product) => {
        return <ProductCard product={product} isSelected={true} />;
      })}
    </Container>
  );
};
