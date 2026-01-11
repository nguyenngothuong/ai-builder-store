# AI Builder Store - Landing Page

Landing page giới thiệu tài khoản AI Premium cho developer và builder.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Features

✅ Hero section với CTA rõ ràng  
✅ Trust bar thể hiện uy tín  
✅ Pain points giải quyết vấn đề khách hàng  
✅ Solution section  
✅ Bảng giá 3 tabs: AI Coding / AI Creative / Cloud & Storage  
✅ Why Us - 4 lý do chọn dịch vụ  
✅ FAQ accordion  
✅ Final CTA với Zalo/Telegram  
✅ Responsive design  
✅ Smooth animations  

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 3. Build for production

```bash
npm run build
npm start
```

## Cấu hình

### Cập nhật link Zalo/Telegram

Mở file `lib/data/site.ts` và cập nhật:

```typescript
export const siteConfig = {
  // ...
  cta: {
    zalo: 'https://zalo.me/your-zalo-id', // ← Thay bằng link Zalo của bạn
    telegram: 'https://t.me/your-telegram-id', // ← Thay bằng link Telegram của bạn
  },
};
```

### Chỉnh sửa giá

Mở file `lib/data/pricing.ts` để cập nhật bảng giá.

### Chỉnh sửa FAQ

Mở file `lib/data/faq.ts` để thêm/sửa câu hỏi thường gặp.

## Cấu trúc thư mục

```
landing-account/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page chính
│   └── globals.css      # Tailwind + custom CSS
├── components/
│   ├── sections/        # Các section của landing page
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Solution.tsx
│   │   ├── PricingTabs.tsx
│   │   ├── WhyUs.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── layout/
│   │   └── Footer.tsx
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── data/
│   │   ├── pricing.ts   # Dữ liệu bảng giá
│   │   ├── faq.ts       # Dữ liệu FAQ
│   │   └── site.ts      # Config site
│   └── utils.ts         # Utility functions
└── docs/
    ├── Plan.md          # Kế hoạch chi tiết
    └── account.txt      # Dữ liệu gốc
```

## Deploy

### Vercel (Recommended)

1. Push code lên GitHub
2. Import vào Vercel
3. Deploy tự động

### Cloudflare Pages

1. Build project: `npm run build`
2. Upload folder `.next` lên Cloudflare Pages

## Customization

### Màu sắc

Chỉnh sửa `app/globals.css` để thay đổi theme colors:

```css
:root {
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... */
}
```

### Font

Chỉnh sửa `app/layout.tsx` để đổi font:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin", "vietnamese"] });
```

## TODO

- [ ] Cập nhật link Zalo/Telegram thật
- [ ] Thêm Google Analytics
- [ ] Tối ưu SEO (structured data, Open Graph)
- [ ] Add dark mode toggle (optional)

## License

Private project - AI Builder Store

---

Built with ❤️ by Diginno Engineering
