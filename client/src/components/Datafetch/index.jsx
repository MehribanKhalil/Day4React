import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/index";
import "./index.css";

const Data = () => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/product");
    setData(res.data);
    setIsloading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>exm</h1>
      <div className="card_container">
        {isloading ? (
          <h2>gozle de bi</h2>
        ) : (
          data &&
          data.map((x) => (
            <div key={x.id}>
              <Cards {...x} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Data;
