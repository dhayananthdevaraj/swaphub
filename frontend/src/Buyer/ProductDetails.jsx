import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import axios from 'axios';
import { apiUrl } from '../apiconfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const RentalList = () => {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showLogoutPopup, setshowLogoutPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortValue, setSortValue] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRentals();
    }, [searchTerm, sortValue]);

    async function fetchRentals() {
        try {
            const userResponse = await axios.get(apiUrl + '/api/users', {
                headers: { Authorization: `${localStorage.getItem("token")}` }
            });
            const productResponse = await axios.get(
                `${apiUrl}/api/product?searchValue=${searchTerm}&sortValue=${sortValue}`,
                {
                    headers: { Authorization: `${localStorage.getItem("token")}` }
                }
            );
          console.log("userResponse",userResponse);
          console.log("productResponse",productResponse);

            const users = await userResponse.data;
            const recipeData = await productResponse.data;

            const productWithUserData = recipeData.map((recipe) => {
                
                const user = users.find(u => u.userId === recipe.userId);
                return {
                    ...recipe,
                    userName: user ? `${user.firstName} ${user.lastName}` : "Unknown",
                    userEmail: user ? user.email : "Unknown",
                    userPhone: user ? user.mobileNumber : "Unknown"
                };
            });
            console.log("productWithUserData",productWithUserData);
            setProduct(productWithUserData);
        } catch (error) {
            navigate("/error");
        }
    }

    const openPopup = (recipe) => {
        setSelectedProduct(recipe);
        setShowPopup(true);
    };

    const closePopup = () => {
        setSelectedProduct(null);
        setShowPopup(false);
    };

    return (
        <div className={`RecipeList`}>
        {/* <button className='styledbutton' onClick={() => { navigate("/login") }}>Logout</button> */}
        <button className='styledbutton' onClick={() => { setshowLogoutPopup(true) }}>Logout</button>

        <h1>Swap Hub Products</h1>
        <div className="filter-container">
                <div className="search-box">
                    <input
                        id='searchBox'
                        type="text"
                        placeholder="Search by product name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
        
                <div className="sort-box">
                    <label htmlFor="sortDropdown">Sort By Price:</label>
                    <select
                        id="sortDropdown"
                        value={sortValue}
                        onChange={(e) => setSortValue(parseInt(e.target.value))}
                    >
                        <option value={1}>Price Ascending</option>
                        <option value={-1}>Price Descending</option>
                    </select>
                </div>
            </div>

            <hr />

        <div className="card-container">
            {product.length ? product.map((product) => (
                <div key={product._id} className="recipe-card" onClick={() => openPopup(product)}>
                    <img src={product.photo} alt={product.productName} />
                    <div className="card-details">
                        <h2>{product.productName}</h2>
                        <p>Description: {product.description}</p>
                        <p>ExpectedPrice: {product.expectedPrice}</p>
                    </div>
                </div>
            )) : (
                <div className="norecord" style={{ textAlign: "center" }}>
                    No records found
                </div>
            )}
        </div>

            {showPopup && selectedProduct && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>

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
                        <p><strong>Posted By: </strong> {selectedProduct.userName}</p>
                        <p><strong>Contact Email: </strong> {selectedProduct.userEmail}</p>
                        <p><strong>Contact Phone: </strong> {selectedProduct.userPhone}</p>
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
                                setshowLogoutPopup(false);
                                }}
                            >
                                Cancel
                            </button>
                            </div>
                        )}
        </div>
    );
};

export default RentalList;
