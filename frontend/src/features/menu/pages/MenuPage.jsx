import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
import MenuList from "../components/MenuList";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  // Fetch menu data using the custom useFetch hook (Handles loading, error, and success states)
  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  // Handle loading state
  if (isLoading) {
    return (
      <div className="container">
        <p style={{ color: "#333", fontSize: "18px" }}>Loading menu...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container">
        <p style={{ color: "#dc2626", fontSize: "18px" }}>Could not load menu: {error}</p>
      </div>
    );
  }

  // Filter dishes based on the debounced search input query
  const filtered = (dishes || []).filter((dish) =>
    dish.name.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <div className="container">
      {/* Controlled search input element */}
      <input
        className="search-box"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
      />
      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;