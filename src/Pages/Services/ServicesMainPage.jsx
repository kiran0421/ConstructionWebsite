import React from "react";
import styles from "./Services.module.css";
const ServicesMainPage = ({ filteredProducts }) => {
  console.log(filteredProducts);
  return (
    <div>
      <div className={styles.productsContainer}>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesMainPage;
