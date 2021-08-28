import { useCart } from "../../providers/cartProvider";
import { Card, Button } from "./styles";
import { toast } from "react-toastify";

interface Product {
  name: string;
  image_url: string;
  price: number;
  description: string;
  id: number;
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
}

export const ProductCard = ({ product, isSelected }: ProductCardProps) => {
  const { name, image_url, price, description, id } = product;
  const { addProduct, removeProduct } = useCart();
  return (
    <Card key={id}>
      <img src={image_url} alt="product" />
      <h1>{name}</h1>
      <p>{description}</p>
      <div>Price: R${price}</div>
      {isSelected ? (
        <Button
          isSelected={true}
          onClick={() => {
            removeProduct(product);
            toast.success("Produto Removido");
          }}
        >
          remove
        </Button>
      ) : (
        <Button
          isSelected={false}
          onClick={() => {
            addProduct(product);
            toast.success("Produto Adicionado");
          }}
        >
          add
        </Button>
      )}
    </Card>
  );
};
