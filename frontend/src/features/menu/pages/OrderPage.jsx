import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Name too short";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Enter a valid email";
    if (Number(v.qty) < 1) e.qty = "Qty must be ≥ 1";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  }

  return (
    <div className="container">
      <div style={{ maxWidth: "500px", background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 3px 12px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column" }}>
        <h2>Place Your Order</h2>
        {done ? (
          <p style={{ color: "#2563eb", fontWeight: "bold", fontSize: "18px" }}>Thanks, {form.name}! Order received.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ fontWeight: "bold", fontSize: "14px" }}>Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="search-box" style={{ width: "100%", margin: 0, boxSizing: "border-box" }} placeholder="Your name" />
              {errors.name && <span style={{ color: "red", fontSize: "12px" }}>{errors.name}</span>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ fontWeight: "bold", fontSize: "14px" }}>Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="search-box" style={{ width: "100%", margin: 0, boxSizing: "border-box" }} placeholder="Your email" />
              {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email}</span>}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ fontWeight: "bold", fontSize: "14px" }}>Quantity</label>
              <input name="qty" type="number" value={form.qty} onChange={handleChange} className="search-box" style={{ width: "100%", margin: 0, boxSizing: "border-box" }} />
              {errors.qty && <span style={{ color: "red", fontSize: "12px" }}>{errors.qty}</span>}
            </div>

            <button type="submit" style={{ background: "#2563eb", color: "white", border: "none", padding: "12px", fontSize: "16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", marginTop: "10px" }}>
              Place order
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OrderPage;