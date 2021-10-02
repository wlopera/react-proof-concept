import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getDataInitial, addData } from "../services/Services";

const Main = (props) => {
  const [options, setOptions] = useState([]);
  const [newValue, setNewValue] = useState({
    key: -1,
    text: "",
    message: "",
    value: -1,
  });

  useEffect(() => {
    setOptions(getDataInitial);
  }, []);

  const getDataList = () => {
    return options;
  };

  const addDataHandler = (value) => {
    const { option, data } = addData(options, value);
    console.log("nuevo valor: ", option, data);
    setNewValue(option);
    setOptions(data);
  };

  return (
    <Product
      getData={getDataList}
      addData={addDataHandler}
      newValue={newValue}
    />
  );
};

export default Main;
