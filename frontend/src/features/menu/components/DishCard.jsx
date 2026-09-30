import { Link } from "react-router-dom";

// Reusable component to display individual dish details in a card layout
function DishCard({ dish }) {
  return (
    <Link to={`/dish/${dish.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="dish-card">
        {dish.image && (
          <img 
            src={dish.image} 
            alt={dish.name} 
            style={{ width: "100%", height: "210px", objectFit: "cover", display: "block" }} 
          />
        )}
        <div style={{ padding: "10px 14px" }}>
          <h3 style={{ margin: "0 0 2px 0", fontSize: "17px" }}>{dish.name}</h3>
          <p className="price" style={{ margin: "0 0 2px 0", fontWeight: "bold", color: "#b91c1c" }}>Rs. {dish.price.toFixed(2)}</p>
          <p className="category" style={{ margin: 0, color: "#666", fontSize: "13px" }}>{dish.category}</p>
          {!dish.available && (
            <span style={{ color: "#dc2626", fontSize: "12px", fontWeight: "bold" }}> — Sold out</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default DishCard;