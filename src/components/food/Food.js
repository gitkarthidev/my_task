import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./food.css";
import axios from "axios";
const Food = () => {
  const [incredientItems, setIngredientItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = "7a0985a350f99ef39bded9243de31ed2";
  const APP_ID = "24c1428b";
  let url = `search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    fetchRecepies();
  }, []);
  const fetchRecepies = async () => {
    const response = await axios.get(url);
    //console.log(response.data.hits);
    setIngredientItems(response.data.hits);
  };
  console.log(incredientItems);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ClipLoader
            color={"gray"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="recepie_header">
          <div className="recepie_wrapper">
            {incredientItems?.map((incredient) => (
              <div className="recepie_incredient">
                <div>{incredient.recipe.label}</div>
                <img src={incredient.recipe.image} alt="" />
                <div className="recepie_ingredients_steps">
                  {incredient.recipe?.ingredientLines?.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
