import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Row, Col, Pagination } from "antd";
import ContentComponent from "../components/contentComponent";
const { Content } = Layout;

function MainPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`http://188.225.31.249:8000/api/v1/finding/`, {
        params: {
          page: page,
          page_size: 10,
          search: search,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setProducts(response.data.results);
      })
      .catch((error) => {
        alert("serverdan malumot kemadi.");
      });
  }, [search, page]);

  let timer;
  function onSearch(value) {
    clearInterval(timer);
    timer = setTimeout(() => {
      setSearch(value.target.value);
    }, 800);
  }
  const onShowSizeChange = (current) => {
    setPage(current);
  };
  return (
    <section className="main-style container">
      <Content className="content-style">
        <Row className="row-content">
          <Col className="search-col">
            <form>
              <input
                onChange={onSearch}
                type="text"
                className="search-input"
                placeholder="Mahsulotlarni qidirish."
              />
            </form>
          </Col>
        </Row>
        <ContentComponent products={products} />
        <Row className="pagination-panel">
          <Col>
            <Pagination
              showSizeChanger
              onChange={onShowSizeChange}
              defaultCurrent={1}
              total={100}
              hideOnSinglePage={true}
              responsive={true}
            />
          </Col>
        </Row>
      </Content>
    </section>
  );
}

export default MainPage;
