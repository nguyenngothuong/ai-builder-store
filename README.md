# AI Builder Store 🚀

> Nền tảng cung cấp tài khoản AI Premium & Cloud Storage chất lượng cao dành riêng cho Developer và Builder.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black)](https://ai-builder-store.diginno.net/)

## 🌐 Live Demo

👉 **Trải nghiệm ngay tại:** [https://ai-builder-store.diginno.net/](https://ai-builder-store.diginno.net/)

## 🌟 Giới thiệu

**AI Builder Store** là landing page tối ưu chuyển đổi, giúp Developer dễ dàng tra cứu và đăng ký các gói tài khoản như Cursor Pro, ChatGPT Team, Gemini Ultra, và Google One với mức giá tối ưu nhất.

Dự án được xây dựng với mục tiêu: **Nhanh - Đẹp - Dễ tùy biến**.

## ✨ Tính năng chính

- **🎨 Modern UI/UX**: Thiết kế hiện đại, dark-themed, phù hợp với gu của lập trình viên.
- **⚡ High Performance**: Điểm PageSpeed cao nhờ Next.js App Router và tối ưu tài nguyên.
- **📱 Fully Responsive**: Hiển thị hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
- **🔄 Smooth Animations**: Hiệu ứng chuyển động mượt mà với Framer Motion.
- **💰 Smart Pricing Tables**: Bảng giá chia tab thông minh (Coding / Creative / Cloud), dễ so sánh.
- **❓ FAQ System**: Hệ thống câu hỏi thường gặp dạng Accordion.
- **📞 Direct CTA**: Tích hợp nút liên hệ Zalo/Telegram trực tiếp.

## 🛠 Tech Stack

- **Core**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## 🚀 Cài đặt & Chạy dự án

### Yêu cầu
- Node.js 18+
- npm hoặc yarn/pnpm/bun

### Các bước thực hiện

1. **Clone repository**
   ```bash
   git clone https://github.com/nguyenngothuong/ai-builder-store.git
   cd ai-builder-store
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy môi trường Development**
   ```bash
   npm run dev
   ```
   Truy cập `http://localhost:3000` để xem kết quả.

4. **Build cho Production**
   ```bash
   npm run build
   npm start
   ```

## ⚙️ Hướng dẫn tùy chỉnh (Customization)

Bạn có thể thay đổi toàn bộ nội dung trang web mà không cần sửa code giao diện, chỉ cần chỉnh sửa các file dữ liệu trong thư mục `lib/data/`.

### 1. Thay đổi thông tin liên hệ (Zalo/Telegram)
Mở file `lib/data/site.ts`:
```typescript
export const siteConfig = {
  // ...
  cta: {
    zalo: 'https://zalo.me/SĐT_CUA_BAN',       // <--- Thay link Zalo
    telegram: 'https://t.me/USERNAME_CUA_BAN', // <--- Thay link Telegram
  },
  // ...
};
```

### 2. Cập nhật Bảng giá
Mở file `lib/data/pricing.ts`. Bạn có thể thêm/sửa/xóa các mục trong mảng `items`:
```typescript
{
  tool: 'Tên Công Cụ',
  package: 'Tên Gói',
  price: 'Giá Tiền',
  note: 'Ghi chú thêm (optional)',
  warranty: 'BHF', // hoặc 'KBH'
  isHighlight: true, // true nếu muốn làm nổi bật
}
```

### 3. Cập nhật FAQ
Mở file `lib/data/faq.ts` để sửa đổi câu hỏi và câu trả lời.

## 📂 Cấu trúc thư mục

```
ai-builder-store/
├── app/                 # Logic routing và layout chính
├── components/          #
│   ├── ui/              # Các component cơ bản (Button, Card...)
│   ├── sections/        # Các phần nội dung trang (Hero, Pricing...)
│   └── layout/          # Header, Footer
├── lib/
│   └── data/            # Nơi chứa dữ liệu (Giá, FAQ, Config)
└── public/              # Hình ảnh, icon tĩnh
```

## 🤝 Đóng góp (Contributing)

Mọi đóng góp đều được hoan nghênh! Vui lòng tạo Pull Request hoặc mở Issue nếu bạn tìm thấy lỗi.

## 📄 License

Dự án này thuộc sở hữu của **AI Builder Store**.

---
Built with ❤️ by **Diginno Engineering**
