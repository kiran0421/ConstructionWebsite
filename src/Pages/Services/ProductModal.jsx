import React, { useState } from "react";

function ProductModal({ isModalOpen, setIsModalOpen, handleAddProduct }) {
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isFormEdited, setIsFormEdited] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      setIsFormEdited(true);
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await handleAddProduct(formData);

      if (response) {
        setSuccess("Product successfully added!");
      } else {
        setError("Failed to add product.");
      }
    } catch (error) {
      setError("An error occurred while posting the product.");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
      setIsFormEdited(false);
    }
  };

  const handleWarningModalAction = (action) => {
    if (action === "yes") {
      setIsModalOpen(false);
      setIsWarningModalOpen(false);
    } else {
      setIsWarningModalOpen(false);
    }
  };

  const closeModal = () => {
    if (isFormEdited) {
      setIsWarningModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleFormChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {success && <div className="text-green-500 mt-4">{success}</div>}
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </div>

      {isWarningModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 text-center">
            <h3 className="text-xl font-bold mb-4">
              Do you want to leave the page? All your data will be lost...
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleWarningModalAction("yes")}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => handleWarningModalAction("no")}
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModal;
