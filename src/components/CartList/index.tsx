import { useCart } from "../../providers/cartProvider";
import { ProductCard } from "../ProductCard";
import { Container, EmptyCart } from "./styles";
import Empty from "../../assets/Empty.svg";

export const CartList = () => {
  const { cartList } = useCart();
  return (
    <Container>
      {cartList.length > 0 ? (
        cartList.map((product) => {
          return <ProductCard product={product} isSelected={true} />;
        })
      ) : (
        <EmptyCart>
          <img src={Empty} alt="" />
          <div>Você ainda não selecionou nenhum produto</div>
        </EmptyCart>
      )}
    </Container>
  );
};
