import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import LoginPage from "./Login";

// Мокаємо useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("LoginPage", () => {
  it("renders login form by default", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText("Ім'я користувача")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Увійти/i })).toBeInTheDocument();
    expect(screen.getByText(/Немає акаунту\?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Зареєструватися/i })).toBeInTheDocument();
  });

  it("shows error if fields are empty in login mode", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /Увійти/i }));
    expect(screen.getByText("Будь ласка, заповніть всі поля.")).toBeInTheDocument();
  });

  it("switches to register form", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /Зареєструватися/i }));
    expect(screen.getByRole("button", { name: /Зареєструватися/i })).toBeInTheDocument();
    expect(screen.getByText(/Вже маєте акаунт\?/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Увійти/i })).toBeInTheDocument();
  });

  it("shows error if fields are empty in register mode", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /Зареєструватися/i }));
    fireEvent.click(screen.getByRole("button", { name: /^Зареєструватися$/i }));
    expect(screen.getByText("Будь ласка, заповніть всі поля.")).toBeInTheDocument();
  });
});
