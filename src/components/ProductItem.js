import React from "react";
import Tshirts from "./tshirts.json";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, img, price, inventory } = info;

  return (
     <Card style={{ width: "30%" }}>
        <Card.Img
            variant="top"
        src={`${process.env.PUBLIC_URL}/${Tshirts[0].img}`}
        alt="rock t-shirt" fluid
      /><Card.Body><li key={id}>
        <Card.Title>
      <h3 className="lead">{Tshirts[0].productName}</h3>
      </Card.Title>
       <Card.Text><p>{price}</p>
      <p>{Tshirts[0].inventory} items in stock</p></Card.Text>
      <Button variant="primary"
        disabled={Tshirts[0].inventory === 0}
        onClick={() => {
          console.log(info);
          addToCart(info);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Out of stock"}
      </Button>
      </li>
      </Card.Body>
      </Card>
    
  );
};

export default ProductItem;
