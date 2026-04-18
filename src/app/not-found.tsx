"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div
      style={{
        background: "#2E6CF4",
        color: "#fff",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        flexDirection: "column",
        textAlign: "center",
        paddingInline: "20px",
      }}
    >
      <h1>Ошибка 404</h1>
      <p>Произошла ошибка. Страница не найдена.</p>
      <button
        onClick={() => router.push("/")}
        style={{
          color: "#2E6CF4",
          background: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
