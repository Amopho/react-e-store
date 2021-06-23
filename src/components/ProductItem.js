import React from "react";
import Tshirts from "./tshirts.json";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, img, price, inventory } = info;

  return (
    <li key={id}>
      {productName} <Card style={{ width: "30%" }}>
        <Card.Img
            variant="top"
        src={`${process.env.PUBLIC_URL}/${Tshirts[0].img}`}
        alt="rock t-shirt" fluid
      /><Card.Body>
      <h5>{price}</h5>
      <h6>{inventory} items in stock</h6>
      <Button variant="primary"
        disabled={inventory === 0}
        onClick={() => {
          console.log(info);
          addToCart(info);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Out of stock"}
      </Button>
      </Card.Body>
      </Card>
    </li>
  );
};

export default ProductItem;
