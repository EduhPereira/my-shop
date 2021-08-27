import { api } from "../../services/api";
import { ProductCard } from "../ProductCard";
import { useEffect, useState } from "react";
import { Container } from "./styles";

interface Product {
  name: string;
  image_url: string;
  price: number;
  description: string;
  id: number;
}

export const ProductsList = () => {
  const [productsList, setProductsList] = useState<Product[]>([] as Product[]);
  useEffect(() => {
    api
      .get("products")
      .then((response) => setProductsList([...response.data]))
      .catch((e) => console.log("E R R O"));
  }, []);
  return (
    <Container>
      {productsList.map((product) => {
        return <ProductCard product={product} isSelected={false} />;
      })}
    </Container>
  );
};
