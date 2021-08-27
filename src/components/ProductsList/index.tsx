import axios from "axios";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

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
    <>
      {productsList.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <img src={product.image_url} alt="" />
            <div>{product.description}</div>
            <div>{product.price}</div>
            <button>A D D</button>
          </div>
        );
      })}
    </>
  );
};
