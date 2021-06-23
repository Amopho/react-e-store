import React from "react";
import Tshirts from "../tshirts.json";
import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, img, price, inventory } = info;

  return (
  <li key={id}>
     <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${img}`} alt="rock t-shirt" />
        <Card.Body>
          <Card.Title className="text">
            <h3>{productName}</h3>
          </Card.Title>
          <Card.Text>
            <p className="lead">{price}</p>
            <p className="lead">{inventory} items in stock</p>
          </Card.Text>
          <Button variant="outline-dark"
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
    </li>);
};

export default ProductItem;
