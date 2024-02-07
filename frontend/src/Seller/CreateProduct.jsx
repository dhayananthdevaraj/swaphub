import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CreateProduct.css";
import axios from 'axios';
import { apiUrl } from '../apiconfig';

const CreateProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    negotiation: true,
    category: '',
    expectedPrice: 0,
    photo: null,
    dateOfPurchase: null,
  });

  const [errors, setErrors] = useState({
    productName: '',
    description: '',
    negotiation: '',
    category : '',
    expectedPrice: '',
    photo: '',
    dateOfPurchase:''
  });

  useEffect(() => {
    console.log("localStorage.getItem",localStorage.getItem("editId"));
    let a=localStorage.getItem("editId")
    if(a !== "") {
      editfun();
    }
  }, []);

  async function editfun() { 
    const token = localStorage.getItem("token");

    try {
      let response = await axios.get(apiUrl + "/api/product/" + localStorage.getItem("editId"),
        { headers: { Authorization: `${token}` } }
      );

      console.log("response in id", response);
      setProductData(response.data);
    } catch (error) {
      navigate("/error");
    }
  }

const handleInputChange = (event) => {
  const { name, checked, type } = event.target;
  setProductData({
    ...productData,
    [name]: type === 'checkbox' ? checked : event.target.value
  });
};
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertFileToBase64(file);
    }
  };

  // Convert file to base64
  const convertFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProductData({ ...productData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleCreateProduct = async () => {
    console.log("productData", productData);
    // Validate the form before submitting
    const validationErrors = {};

    if (productData.productName === "") {
      validationErrors.productName = "Product name is required";
    }
    if (productData.description === "") {
      validationErrors.description = "Description is required";
    }
    if (productData.category === "") {
      validationErrors.category = "Category is required";
    }
    if (productData.expectedPrice === 0) {
      validationErrors.expectedPrice = "Expected price should be greater than 0";
    }
    if (productData.photo === null) {
      validationErrors.photo = "Please select a photo";
    }
    if (productData.dateOfPurchase === null) {
      validationErrors.dateOfPurchase = "Date of purchase is required";
    }
    if (typeof productData.negotiation !== 'boolean') {
      validationErrors.negotiation = "Negotiation should be a boolean value";
    }

    console.log("validationErrors", validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Rest of the code remains the same
    // ...
    // productData.photo = ["./assets/" + productData.title + ".jpg"];
    productData.userId = JSON.parse(localStorage.getItem("userData")).userId;

    console.log("productData", productData);

    try {
      let a = localStorage.getItem("editId");
      if (a === "") {
        const token = localStorage.getItem("token");
        console.log("productData",productData);
        let createProductRespose = await axios.post(apiUrl + "/api/product", productData,
          {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `${token}`
            }
          });

        if (createProductRespose.status === 200) {
          navigate("/userproducts");
        }
      } else {
        const token = localStorage.getItem("token");

        let updateProduct = await axios.put(apiUrl + "/api/product/" + localStorage.getItem("editId"), productData,
          {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `${token}`
            }
          });

        if (updateProduct.status === 200) {
          navigate("/userproducts");
        }
      }
    } catch (error) {
      navigate("/error");
    }
  };

  
  // const handleCheckboxChange = (e) => {
  //   const amenity = e.target.value;
  //   const isChecked = e.target.checked;

  //   setProductData((prevData) => {
  //     if (isChecked) {
  //       return { ...prevData, amenities: [...prevData.amenities, amenity] };
  //     } else {
  //       return { ...prevData, amenities: prevData.amenities.filter(item => item !== amenity) };
  //     }
  //   });
  // };


  const productCategories = ['Electronics', 'Furniture', 'Vehicles', 'Books', 'Clothing', 'Tools', 'Toys', 'Sports Equipment', 'Collectibles', 'Musical Instruments', 'Home Appliances', 'Other'];

  return (
    <div className="create-product-container">
      <button onClick={() => navigate(-1)}>Back</button>

      {localStorage.getItem("editId") === "" ? <h2>Create New Product</h2> : <h2>Update Product</h2>}

      <div className="form-group">
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={productData.productName}
          onChange={handleInputChange}
        />
        <span className="error-message">{errors.productName}</span>
      </div>
        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="error-message">{errors.photo}</span>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
          <span className="error-message">{errors.description}</span>
        </div>

      <div className="form-group">
        <label>Product Category:</label>
        <select
          name="category"
          value={productData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select product category</option>
          {productCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className="error-message">{errors.category}</span>
      </div>

      <div className="form-group">
        <label>Date of Purchase:</label>
        <input
          type="date"
          name="dateOfPurchase"
          value={productData.dateOfPurchase ? new Date(productData.dateOfPurchase).toISOString().split('T')[0] : ''}
          onChange={handleInputChange}
        />
        <span className="error-message">{errors.dateOfPurchase}</span>
      </div>

  
      <div className="form-group">
        <label>Expected Price:</label>
        <input
          type="number"
          name="expectedPrice"
          value={productData.expectedPrice}
          onChange={handleInputChange}
        />
        <span className="error-message">{errors.expectedPrice}</span>
      </div>

      <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          name="negotiation"
          checked={productData.negotiation}
          onChange={handleInputChange}
          style={{ transform: 'scale(1.5)', width: '20px' }}
        />

         <label style={{ marginRight: '10px' }}>Negotiable</label>
        <span className="error-message">{errors.negotiation}</span>
      </div>

      <button className='submit-button' type="button" onClick={handleCreateProduct}>
        {localStorage.getItem("editId") === "" ? "Add Product" : "Update Product"}
      </button>
    </div>
  );
};

export default CreateProduct;
