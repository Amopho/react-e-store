import React, { useState } from "react";
// import Data from "./data.json";
import Tshirts from "./tshirts.json";
import ProductList from "./components/ProductList";
import { Fragment } from "react";

function App() {
  const [tshirts, setTshirts] = useState(Tshirts);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    const searchText = userText ? userText : "";
    let newArr = tshirts.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <Fragment>
      <h1>Welcome to our online store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList tshirts={userInput ? filteredData : tshirts} />
    </Fragment>
  );
}

export default App;
