import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Будь ласка, заповніть всі поля.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        localStorage.setItem("access_token", "dummy-access-token");
        localStorage.setItem("refresh_token", "dummy-refresh-token");
        navigate("/"); // або "/" якщо нема dashboard
      } else {
        setError("Невірне ім’я користувача або пароль.");
      }
      setLoading(false);
    }, 1000); // симуляція затримки
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f4f8",
      padding: "20px",
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "1.75rem",
          fontWeight: "700",
          marginBottom: "24px",
        }}>Увійти до акаунту</h2>

        {error && (
          <div style={{ color: "red", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Ім'я користувача"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#a5b4fc" : "#2563eb",
            color: "white",
            fontSize: "1rem",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Завантаження..." : "Увійти"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
