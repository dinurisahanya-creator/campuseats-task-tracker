import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function DishDetailPage() {
  const { id } = useParams(); // URL එකෙන් :id එක ලබා ගැනීම[cite: 1]
  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  if (isLoading) {
    return (
      <div className="container">
        <p style={{ color: "#333", fontSize: "18px" }}>Loading dish details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p style={{ color: "#dc2626", fontSize: "18px" }}>Could not load dish details: {error}</p>
        <Link to="/" style={{ color: "#dc2626", fontWeight: "bold", textDecoration: "none", marginTop: "10px", display: "inline-block" }}>
          ← Back to menu
        </Link>
      </div>
    );
  }

  // අදාළ ID එකට අදාළ ඩිෂ් එක සොයා ගැනීම
  const dish = (dishes || []).find((d) => d.id === Number(id));

  if (!dish) {
    return (
      <div className="container">
        <h2 style={{ color: "#333" }}>Dish not found</h2>
        <p style={{ color: "#666", marginBottom: "15px" }}>The dish you are looking for does not exist or has been removed.</p>
        <Link to="/" style={{ color: "#dc2626", fontWeight: "bold", textDecoration: "none" }}>
          ← Back to menu
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ justifyContent: "center" }}>
      <div style={{ maxWidth: "550px", width: "100%", background: "rgba(255, 255, 255, 0.95)", borderRadius: "12px", borderTop: "4px solid #facc15", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", overflow: "hidden" }}>
        {dish.image && (
          <img 
            src={dish.image} 
            alt={dish.name} 
            style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} 
          />
        )}
        <div style={{ padding: "30px" }}>
          <h2 style={{ marginTop: 0, fontSize: "24px", color: "#1f2937" }}>{dish.name}</h2>
          
          <p className="price" style={{ color: "#b91c1c", fontWeight: "bold", fontSize: "20px", margin: "8px 0" }}>
            Rs. {dish.price.toFixed(2)}
          </p>
          
          <p className="category" style={{ marginBottom: "15px", color: "#4b5563", fontSize: "15px" }}>
            Category: <strong>{dish.category}</strong>
          </p>
          
          {dish.description && (
            <p style={{ color: "#4b5563", lineHeight: "1.6", marginBottom: "20px", fontSize: "15px" }}>
              {dish.description}
            </p>
          )}

          <p style={{ marginBottom: "25px", fontSize: "15px" }}>
            Status:{" "}
            <span style={{ fontWeight: "bold", color: dish.available ? "#16a34a" : "#dc2626" }}>
              {dish.available ? "Available" : "Sold Out"}
            </span>
          </p>

          <div>
            <Link to="/" style={{ color: "#dc2626", fontWeight: "bold", textDecoration: "none", fontSize: "15px" }}>
              ← Back to menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetailPage;