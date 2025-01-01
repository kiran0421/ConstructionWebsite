import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa";
import styles from "./Services.module.css";

function Querybar({ uniqueCategories, setIsModalOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const initialSearchText = queryParams.get("search") || "";
  const initialCategories = queryParams.getAll("category") || [];

  useEffect(() => {
    setSearchText(initialSearchText);
    setSelectedCategories(initialCategories);
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchText) {
      params.set("search", searchText);
    }
    selectedCategories.forEach((category) => {
      params.append("category", category);
    });

    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  }, [searchText, selectedCategories, navigate, location.pathname]);

  // Handle input change (search text)
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  return (
    <div className={styles.querybarContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <FaSearch className={styles.searchIcon} />
      </div>
      <button
        className={styles.filterButton}
        onClick={() => setFilterVisible(!filterVisible)}
      >
        <FaFilter className={styles.filterIcon} />
      </button>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
      >
        Add Product
      </button>

      {filterVisible && (
        <div className={styles.filterDropdown}>
          <h3>Select Categories</h3>
          <div className={styles.categoryList}>
            {uniqueCategories.map((category) => (
              <label key={category} className={styles.categoryItem}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                  className={styles.categoryCheckbox}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Querybar;
