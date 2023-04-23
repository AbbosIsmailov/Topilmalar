import { Card, Col, Row } from "antd";
import {Link} from "react-router-dom"
import React from "react";

function ContentComponent(props) {
  const products = props.products;
  return (
    <>
      <Row className="row-content">
        {products.map((product) => {
          return (
            <Col className="content-col" key={product.id}>
              <Link to={`/product/${product.id}`} >
                <Card
                  hoverable
                  style={{
                    width: 260,
                    height: 250,
                    overflow: "hidden",
                    margin: 12,
                  }}
                  cover={
                    <img
                      className="img-content"
                      alt="lost-image"
                      src={product.image}
                    />
                  }
                >
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default ContentComponent;
