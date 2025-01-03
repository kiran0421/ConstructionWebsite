// ServicesMainPage.js
import React from "react";
import styles from "./Services.module.css";

const ServicesMainPage = ({ filteredProducts }) => {
  const hasProducts =
    Array.isArray(filteredProducts) && filteredProducts.length > 0;

  return (
    <div>
      <div className={styles.productsContainer}>
        {
          hasProducts
            ? filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              ))
            : () => {
                <p>No products found</p>;
              } /* Render nothing when there are no products */
        }
      </div>
    </div>
  );
};

export default ServicesMainPage;
