import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import PortfolioPage from "./pages/PortfolioPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./lib/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
