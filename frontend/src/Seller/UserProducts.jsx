import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProducts.css";
import axios from "axios";
import { apiUrl } from "../apiconfig.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const UserProducts = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showLogoutPopup, SetshowLogoutPopup] = useState(false);
  const [productToBeDelete, setProductToBeDelete] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPopup, setShowProductPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValue, setSortValue] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("editId", "");
    console.log("came in grid");
    fun();
  }, [searchTerm, sortValue]);

  async function fun() {
    try {
      const token = localStorage.getItem("token");

      console.log("inside function");
const productResponse = await axios.get(
  apiUrl + `/api/product/user/${JSON.parse(localStorage.getItem("userData")).userId}?searchValue=${searchTerm}&sortValue=${sortValue}`  ,
  { 
    headers: { Authorization: `${token}` },
    params: { searchTerm: searchTerm, sortValue: sortValue }
  }
);
      console.log("productResponse", productResponse);
      if (productResponse.status === 200) {
        setProducts(productResponse.data);
      }
    } catch (error) {
      // navigate("/error");
    }
  }

  const handleDeleteClick = (id) => {
    setProductToBeDelete(id);
    setShowDeletePopup(true);
  };

  async function deletefunction() {
    const productId = productToBeDelete;

    try {
      const token = localStorage.getItem("token");

      let deleteResponse = await axios.delete(
        apiUrl + `/api/product/${productId}`,
        { headers: { Authorization: `${token}` } }
      );
      if (deleteResponse.status === 200) {
        fun();
      }
      setShowDeletePopup(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductPopup(true);
  };

  return (
    <div>
      <div className={`ProductsList ${showDeletePopup||showLogoutPopup? "popup-open" : ""}`}>
        <button
          className="styledbutton"
          onClick={() => {
            // navigate("/login");
            SetshowLogoutPopup(true)
          }}
        >
          Logout
        </button>
        <button
          className="styledbutton"
          onClick={() => navigate("/createproduct")}
        >
          Post new Product
        </button>
        <h1>My Products</h1>
        {/* Search functionality */}
        <input
          className="search"
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <hr />

        {/* Card layout */}
        <div className="card-container">
          {products.length ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.photo} alt={product.productName} onClick={() => handleProductClick(product)} />
                <div className="card-details">
                  <h2>{product.productName}</h2>
                  <hr />
                  <p> {product.description}</p>
                  <p>Expected Price: {product.expectedPrice}</p>
                  <p>Category : {product.category}</p>
                  <div className="action-buttons">
                    <button className="styledbutton"
                      style={{ backgroundColor: "red" , width:"100px" }}
                      onClick={() => {
                        handleDeleteClick(product.productId);
                      }}
                    >
                      Delete
                    </button>
                    <button className="styledbutton"
                      style={{ backgroundColor: "green" , width:"100px" }}
                      onClick={() => {
                        localStorage.setItem("editId", product.productId);
                        navigate("/createproduct");
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="norecord">No records found</div>
          )}
        </div>
      </div>

      {showDeletePopup && (
        <div className="delete-popup">
          <p>Are you sure you want to delete?</p>
          <button onClick={deletefunction}>Yes, Delete</button>
          <button
            onClick={() => {
              setShowDeletePopup(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}

{showProductPopup && selectedProduct && (
  <div className="popup">
    <div className="popup-content">
      <span className="close" onClick={() => setShowProductPopup(false)}>&times;</span>
      <h2>{selectedProduct.productName}</h2>
      <hr />
      <h2>Details</h2>
      <p><strong>Description: </strong> {selectedProduct.description}</p>
      <p><strong>Expected Price: </strong>{selectedProduct.expectedPrice}</p>
      <p><strong>Category: </strong> {selectedProduct.category}</p>
      <p>
        <strong>Date of Purchase: </strong> 
        {new Date(selectedProduct.dateOfPurchase).toLocaleDateString()}
      </p>
      <p>
        <strong>Negotiation: </strong>
        {selectedProduct.negotiation ? 
          <FontAwesomeIcon icon={faCheck} /> : 
          <FontAwesomeIcon icon={faTimes} />
        }
      </p>
    </div>
  </div>
)}
       {showLogoutPopup && (
        <div className="delete-popup">
          <p>Are you sure you want to Logout?</p>
          <button onClick={()=>{
            localStorage.clear();
            navigate("/login");
          }}>Yes, Logout</button>
          <button
            onClick={() => {
              SetshowLogoutPopup(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProducts;
