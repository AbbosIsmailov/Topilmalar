import { Col, Row } from "antd";
import {Link} from "react-router-dom";
import React from "react";

function HeaderContent() {
  return (
    <>
      <Row justify={"space-between"} className="header-content">
        <Col className="header-logo">
          Logo
        </Col>
        <Col className="header-nav">
          <Row gutter={16}>
            <Col>
              <Link className="header-link" to={"/i-found"}>
                Topib oldim
              </Link>
            </Col>
            <Col>
              <Link className="header-link" to={"/i-found"}>
                Yo'qotdim
              </Link>
            </Col>
            <Col>
              <Link className="header-link" to={"/i-found"}>
                Kirish
              </Link>
            </Col>
            <Col>
              <Link className="header-link" to={"/i-found"}>
                Ro'yhatdan o'tish
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default HeaderContent;
