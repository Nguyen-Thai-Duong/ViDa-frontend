// src/api.ts

type CreateBody = {
    name: string;
    type: string;
    batchNumber: string;
    producer: string;
    description?: string;
};

// 🔧 Ưu tiên dùng biến môi trường nếu có, fallback về Render backend
const API_BASE =
    (process.env.REACT_APP_API_URL?.trim() ||
        "https://vida-backend.onrender.com").replace(/\/+$/, "");

console.log("🌐 API Base URL =", API_BASE);

export const api = {
    // Kiểm tra tình trạng server
    health: () =>
        fetch(`${API_BASE}/api/health`, {
            method: "GET",
            cache: "no-store",
        }),

    // Tạo sản phẩm mới
    createProduct: (payload: CreateBody) =>
        fetch(`${API_BASE}/api/qr/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }),

    // Tra cứu sản phẩm theo ID
    lookup: (id: string) =>
        fetch(`${API_BASE}/api/qr/lookup/${id}`, {
            method: "GET",
            cache: "no-store",
        }),
};
