import React, { useEffect, useState } from "react";
import ProductItem from "./items";
import styles from "./index.module.css";

const url = "https://v2.api.noroff.dev/online-shop/";

function FetchProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, products]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search products"
      />
      <div className={styles.CardContainer}>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default FetchProducts;
