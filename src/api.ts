const API_BASE = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");

export const api = {
    health: () => fetch(`${API_BASE}/api/health`, { cache: "no-store" }),
    createProduct: (payload: any) =>
        fetch(`${API_BASE}/api/qr/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }),
    lookup: (id: string) => fetch(`${API_BASE}/api/qr/lookup/${id}`),
};
