import { createContext, useState, useContext } from "react";

// AuthContext'i oluşturuyoruz
const AuthContext = createContext();

// AuthProvider bileşeni ile context'i sarmalıyoruz
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true); // Giriş yapıldı
  };

  const logout = () => {
    setIsAuthenticated(false); // Çıkış yapıldı
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context'i kullanmak için custom hook
export const useAuth = () => useContext(AuthContext);
