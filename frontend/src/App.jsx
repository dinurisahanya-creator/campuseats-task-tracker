import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="/">Menu</NavLink> | 
        <NavLink to="/order">Place Order</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MenuPage apiBaseUrl={API_BASE_URL} />} />
        <Route path="/dish/:id" element={<DishDetailPage apiBaseUrl={API_BASE_URL} />} />
        <Route path="/order" element={<OrderPage apiBaseUrl={API_BASE_URL} />} />
        <Route path="*" element={<p>404 — Page not found</p>} />
      </Routes>
    </div>
  );
}