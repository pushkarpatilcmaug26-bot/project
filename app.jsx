import React from "react";

function App() {
  const products = [
    { id: 1, name: "Wheat Seeds", price: 500 },
    { id: 2, name: "Organic Fertilizer", price: 300 },
    { id: 3, name: "Farming Tools", price: 800 },
  ];

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background-color: #f5f7f2;
        }

        nav {
          background-color: #245c36;
          color: white;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav h2 {
          font-size: 26px;
        }

        nav a {
          color: white;
          text-decoration: none;
          margin-left: 22px;
          font-size: 16px;
        }

        .hero {
          text-align: center;
          padding: 70px 20px;
          background-color: #dcefdc;
        }

        .hero h1 {
          color: #245c36;
          font-size: 38px;
          margin-bottom: 15px;
        }

        .hero p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .section {
          padding: 40px 20px;
          text-align: center;
        }

        .section h2 {
          color: #245c36;
          margin-bottom: 25px;
        }

        .products {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .card {
          background: white;
          padding: 25px;
          width: 230px;
          border-radius: 10px;
          box-shadow: 0 2px 8px #ccc;
        }

        .card h3 {
          margin-bottom: 12px;
          color: #245c36;
        }

        button {
          background-color: #245c36;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 12px;
        }

        input, textarea {
          display: block;
          width: 280px;
          padding: 12px;
          margin: 12px auto;
          border: 1px solid #aaa;
          border-radius: 5px;
        }

        footer {
          background-color: #245c36;
          color: white;
          text-align: center;
          padding: 18px;
          margin-top: 30px;
        }
      `}</style>

      {/* Navbar */}
      <nav>
        <h2>AgriMart 🌱</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#login">Login</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section className="hero" id="home">
        <h1>Welcome to AgriMart</h1>
        <p>Your one-stop online marketplace for agricultural products.</p>
        <button onClick={() => (window.location.href = "#products")}>
          Explore Products
        </button>
      </section>

      {/* Products */}
      <section className="section" id="products">
        <h2>Our Products</h2>

        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Login */}
      <section className="section" id="login">
        <h2>User Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Login</button>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h2>Contact Us</h2>

        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="text" placeholder="Enter Subject" />
        <textarea placeholder="Enter Your Message"></textarea>

        <button>Submit</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 AgriMart. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;