import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/homepage";
import About from "./component/about";
import Contact from "./component/contact";
import Services from "./component/services";
import Layout from "./component/shered/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
