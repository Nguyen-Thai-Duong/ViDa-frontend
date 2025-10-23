# Scoby Website

Website giới thiệu sản phẩm túi thân thiện môi trường từ scoby.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

Ứng dụng sẽ chạy tại http://localhost:3000

## Cấu trúc dự án

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   └── FuturePlans.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Tính năng

- **Trang chủ**: Giới thiệu tổng quan về Scoby và sản phẩm
- **Về chúng tôi**: Giới thiệu 5 thành viên nhóm
- **Sản phẩm**: Chi tiết về quy trình sản xuất và các loại túi
- **Dự định tương lai**: Kế hoạch phát triển của nhóm

## Công nghệ sử dụng

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM

## Màu sắc chủ đạo

- Xanh lá cây (#16a34a) - Màu chính
- Xanh lá nhạt (#22c55e) - Màu phụ
- Xám (#6b7280) - Màu văn bản