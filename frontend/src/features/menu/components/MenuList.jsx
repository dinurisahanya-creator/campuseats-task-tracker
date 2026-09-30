import DishCard from "./DishCard";

// Component to render a grid list of dish cards
function MenuList({ dishes }) {
  // Show a message if no dishes match the criteria
  if (!dishes.length) return <p style={{ color: "#333", marginTop: "20px" }}>No dishes match your search.</p>;
  
  return (
    <div className="menu-grid">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default MenuList;