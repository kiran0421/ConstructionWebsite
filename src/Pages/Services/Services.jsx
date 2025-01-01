import React, { useEffect, useState } from "react";
import { getProducts, getUsers } from "../../APIs/Apis";
import Navbar from "../../Components/NavBar";
import styles from "./Services.module.css";
import Querybar from "./Querybar";
import { Outlet, useLocation } from "react-router-dom";
import ServicesMainPage from "./ServicesMainPage";
import ProductModal from "./ProductModal";
function ServicesPage() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Fetch data method
  const fetchData = async () => {
    // Check if data exists in localStorage and if it's valid

    // If no data or data is outdated, fetch new data
    try {
      const productsData = await getProducts();
      const usersData = await getUsers();
      console.log(productsData, usersData);

      const uniqueCategories = [
        ...new Set(productsData.map((product) => product.category)),
      ];
      setProducts(productsData);
      setUsers(usersData);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleAddProduct = async (newProduct) => {
    try {
      const response = await postProduct(newProduct);
      if (response) {
        setProducts((prevProducts) => [...prevProducts, response]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const queryParams = new URLSearchParams(location.search);
  const searchText = queryParams.get("search") || "";
  const selectedCategories = queryParams.getAll("category");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-semibold underline">Loading...</h1>
        <p className="mt-4">Please wait while we load the data.</p>
      </div>
    );
  }

  return (
    <div className={styles.servicesContainer}>
      <Navbar />
      <Querybar
        uniqueCategories={categoriesData}
        setIsModalOpen={setIsModalOpen}
      />
      <ServicesMainPage filteredProducts={filteredProducts} />
      {isModalOpen && (
        <ProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleAddProduct={handleAddProduct}
        />
      )}
      <Outlet />
    </div>
  );
}

export default ServicesPage;
