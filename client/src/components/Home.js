import React from "react";

function Home() {
  return (

    <div style={{ backgroundImage: "url('/starting-seedlings.jpg')", backgroundSize: "cover", minHeight: "100vh" }}>
      <h1 style={{ marginTop: "10px", marginBottom: "10px"}}>Seedling Hub</h1>
      <header style={{ backgroundColor: "rgba(51, 51, 51, 0.7)", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
        
        <nav>
          <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: "0" }}>
            <li>
              <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>Home</a>
            </li>
            <li>
              <a href="/about" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>About </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "white", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>Contact </a>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px 20px", flexGrow: "1" }}>
        <h2>Welcome to Seedling Hub</h2>
        <p>We are the best place to start your gardening journey.</p>
        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <button style={{ backgroundColor: "#333", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Login</button>
          <button style={{ backgroundColor: "#333", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Signup</button>
        </div>
      </main>
      <footer style={{ backgroundColor: "rgba(51, 51, 51, 0.7)", color: "white", padding: "10px 20px", marginTop: "350px", display: "flex", justifyContent: "center" }}>
        <p style={{ margin: 0 }}>© 2023 Seedling Hub</p>
      </footer>
    </div>
  );
}

export default Home;
