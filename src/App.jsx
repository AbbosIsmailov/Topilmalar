import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContent from "./components/headerContent";
import MainPage from "./pages/MainPage";
import Product from "./pages/product";
import Registration from "./pages/registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section className="container">
          <Header>
            <HeaderContent />
          </Header>
          <Layout>
            <Routes>
              <Route path="/" element={<Registration />}/>
              <Route path="/main" element={<MainPage />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </Layout>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
