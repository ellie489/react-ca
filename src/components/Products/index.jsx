import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { OnSale } from '../OnSale'
const url = "https://v2.api.noroff.dev/online-shop/";
export default function LoadProducts() {
  const [products, setProducts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.data);

        setIsLoading(false);
      } catch (error) {

        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image.url} alt="" />
            <p>
              {OnSale(product)} {product.discountedPrice}
            </p>
          </Link>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
    
  );}