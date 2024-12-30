import React, { useEffect, useState } from "react";
import { getProducts, getUsers } from "../../APIs/Apis";
import Navbar from "../../Components/NavBar";
import styles from "./Home.module.css";
import HomeBanner from "./HomeBanner";
import HomeContent from "./HomeContent";
function HomePage() {
  // const [products, setProducts] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [categoriesData, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  // // Method to fetch data and use localStorage if available
  // const fetchData = async () => {
  //   // Check if data exists in localStorage and if it's valid
  //   const cachedProducts = localStorage.getItem("products");
  //   const cachedUsers = localStorage.getItem("users");
  //   const cachedCategories = localStorage.getItem("categories");
  //   const cachedTimestamp = localStorage.getItem("dataTimestamp");

  //   const isDataFresh =
  //     cachedTimestamp && Date.now() - cachedTimestamp < 3600000; // Check if data is less than an hour old

  //   if (isDataFresh && cachedProducts && cachedUsers && cachedCategories) {
  //     // Use the cached data
  //     setProducts(JSON.parse(cachedProducts));
  //     setUsers(JSON.parse(cachedUsers));
  //     setCategories(JSON.parse(cachedCategories));
  //     setLoading(false);
  //   } else {
  //     // If no data or data is outdated, fetch new data
  //     try {
  //       const productsData = await getProducts();
  //       const usersData = await getUsers();
  //       console.log(productsData, usersData);

  //       const uniqueCategories = [
  //         ...new Set(productsData.map((product) => product.category)),
  //       ];

  //       // Save the fetched data and timestamp to localStorage
  //       localStorage.setItem("products", JSON.stringify(productsData));
  //       localStorage.setItem("users", JSON.stringify(usersData));
  //       localStorage.setItem("categories", JSON.stringify(uniqueCategories));
  //       localStorage.setItem("dataTimestamp", Date.now());

  //       // Set the state
  //       setProducts(productsData);
  //       setUsers(usersData);
  //       setCategories(uniqueCategories);
  //     } catch (error) {
  //       console.error("Error loading data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  // // Use effect to fetch data when the component is mounted
  // useEffect(() => {
  //   fetchData();
  // }, []); // Empty dependency array ensures the API is only called once when the component is first mounted

  // if (loading) {
  //   return (
  //     <div className="p-8">
  //       <h1 className="text-3xl font-semibold underline">Loading...</h1>
  //       <p className="mt-4">Please wait while we load the data.</p>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <HomeBanner />
      <HomeContent />
    </div>
  );
}

export default HomePage;
