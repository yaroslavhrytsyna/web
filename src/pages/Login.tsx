import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // режим: вхід або реєстрація

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
      if (isRegister) {
        localStorage.setItem("registeredUser", JSON.stringify({ username, password }));
        alert("Реєстрація успішна! Тепер увійдіть.");
        setIsRegister(false);
      } else {
        const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
        if (savedUser && savedUser.username === username && savedUser.password === password) {
          localStorage.setItem("access_token", "dummy-access-token");
          localStorage.setItem("refresh_token", "dummy-refresh-token");
          navigate("/");
        } else {
          setError("Невірне ім’я користувача або пароль.");
        }
      }

      setLoading(false);
    }, 1000);
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
        }}>
          {isRegister ? "Реєстрація" : "Увійти до акаунту"}
        </h2>

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
          {loading
            ? "Завантаження..."
            : isRegister ? "Зареєструватися" : "Увійти"}
        </button>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          {isRegister
            ? "Вже маєте акаунт?"
            : "Немає акаунту?"}{" "}
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "1rem",
              padding: 0,
            }}
          >
            {isRegister ? "Увійти" : "Зареєструватися"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
