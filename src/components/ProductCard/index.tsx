import { useCart } from "../../providers/cartProvider";
import { Card, Button } from "./styles";

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
  return (
    <Card key={id}>
      <img src={image_url} alt="product" />
      <h1>{name}</h1>
      <p>{description}</p>
      <div>Price: R${price}</div>
      {isSelected ? (
        <Button isSelected={true}>remove</Button>
      ) : (
        <Button isSelected={false}>add</Button>
      )}
    </Card>
  );
};
