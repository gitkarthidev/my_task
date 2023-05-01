import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profileList.css";
import Main from "../Main";
import { Card, CardContent, Typography } from "@mui/material";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";

const initialState = [
  "MyCourses",
  "MyPlaylist",
  "Logout",
  "MyCart",
  "Language",
  "Finished Lessons",
  "Remaining Lessons",
  "Credits",
  "Course Completed",
];

const ProfileList = (props) => {
  const { getData } = props;
  const [products, setProducts] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [productId, setProductId] = useState("");
  const [singleProduct, setSingleProduct] = useState();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(response.data.products);
    } catch (err) {}
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //console.log(products);
  const handleMouseOver = () => {
    setIsHovering(true);

    console.log("hovering");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleProduct = async (id) => {
    console.log(id);
    //setProductId(id);
    try {
      const findProduct = await products.find((product) => product.id === id);
      await setSingleProduct(findProduct);
      console.log(singleProduct);
      await getData(singleProduct);
      navigate("/modal");
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(singleProduct);

  return (
    <div>
      <Main />
      <div className="products">
        {products.map((product) => (
          <div className="product_single" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              // onMouseOver={handleMouseOver}
              // onMouseOut={handleMouseOut}
            />
            <div>
              {product.title}
              <button onClick={() => handleProduct(product.id)}>show</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
