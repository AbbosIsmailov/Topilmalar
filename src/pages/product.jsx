import { Col, Image, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://188.225.31.249:8000/api/v1/finding/${params.id}`)
      .then((response) => {
        console.log(response);
        // setProduct(response);
      })
      .catch((error) => {
        alert("serverdan malumot kemadi.");
      });
  }, []);
  console.log(product);
  return (
    <section className="product-page">
      <Row className="product-row container">
        <Col className="product-col">
          <Image
            rootClassName="product-img"
            src={product.image}
          />
        </Col>
        <Col className="product-col">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-info"><b>Description:</b> {product.description}</p>
          <p className="product-category"><b>Category:</b> <u>{product.cateogry}</u> </p>
          <p className="product-type"><b>Type:</b> {product.type}</p>
        </Col>
      </Row>
    </section>
  );
}

export default Product;
