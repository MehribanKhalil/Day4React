import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/index";
import "./index.css";
import UseFetch from "../UseFetch/UseFetch";

const Data = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const [isloading, setIsloading] = useState(true);

  // const getProducts = async () => {
  //   const res = await axios.get("http://localhost:3000/product");
  //   setData(res.data);
  //   setIsloading(false);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const url = "http://localhost:3000/product";

  const handleData = (data) => {
    console.log(data);
    if (!status) {
      setData(data);
      setStatus(true);
      setIsloading(false);
    }
  };

  UseFetch(url, handleData);

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
