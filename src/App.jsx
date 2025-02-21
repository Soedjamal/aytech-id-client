import { Route, Routes } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import DetailProjectPage from "./pages/DetailProjectPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/portfolio/detail-project"
          element={<DetailProjectPage />}
        />
      </Routes>
    </>
  );
}

export default App;
