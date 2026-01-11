# Architecture Design Document

## 1. Tổng quan (Overview)

**AI Builder Store** là một Single Page Application (Landing Page) được xây dựng để giới thiệu và bán các gói tài khoản Premium AI (ChatGPT, Cursor, Gemini...) cho đối tượng Developer/Builder.

Mục tiêu chính của kiến trúc là:
- **Hiệu năng cao**: Tải trang nhanh, tối ưu SEO.
- **Dễ bảo trì**: Dữ liệu tách biệt với giao diện (UI).
- **Trải nghiệm người dùng**: Animation mượt mà, responsive tốt.

## 2. Tech Stack

| Thành phần | Công nghệ | Lý do lựa chọn |
|------------|-----------|----------------|
| **Framework** | Next.js 16 (App Router) | Server-side rendering (SSR), SEO tốt, routing mạnh mẽ. |
| **Language** | TypeScript | Type safety, giảm thiểu lỗi runtime, DX (Developer Experience) tốt hơn. |
| **Styling** | Tailwind CSS | Utility-first CSS, phát triển UI nhanh, dễ tùy biến. |
| **UI Library** | shadcn/ui | Component đẹp, accessible, dễ dàng copy-paste và tùy chỉnh code. |
| **Icons** | Lucide React | Bộ icon nhẹ, hiện đại, đồng bộ. |
| **Animation** | Framer Motion | Thư viện animation mạnh mẽ cho React, tạo hiệu ứng scroll/hover mượt mà. |
| **Deployment** | Vercel | Tối ưu tốt nhất cho Next.js, CI/CD tự động. |

## 3. Cấu trúc dự án (Project Structure)

Dự án tuân theo cấu trúc chuẩn của Next.js App Router:

```
ai-builder-store/
├── app/                    # App Router (Routing & Pages)
│   ├── layout.tsx          # Root Layout (Fonts, Metadata, Global Styles)
│   ├── page.tsx            # Main Landing Page (Composition of sections)
│   └── globals.css         # Global Styles & Tailwind Directives
├── components/             # React Components
│   ├── ui/                 # Atomic Components (Button, Card, Badge...) - từ shadcn/ui
│   ├── sections/           # Các section lớn của trang (Hero, Pricing, FAQ...)
│   └── layout/             # Các thành phần bố cục chung (Footer, Header)
├── lib/                    # Utilities & Data
│   ├── data/               # Static Data Files (Thay thế database)
│   │   ├── pricing.ts      # Dữ liệu bảng giá
│   │   ├── faq.ts          # Dữ liệu câu hỏi thường gặp
│   │   └── site.ts         # Cấu hình thông tin site & CTA
│   └── utils.ts            # Helper functions (cn helper for Tailwind)
├── public/                 # Static Assets (Images, Icons)
└── docs/                   # Documentation (Plan, Architecture, original data)
```

## 4. Luồng dữ liệu (Data Flow)

Hiện tại dự án không sử dụng Database backend để tối giản chi phí vận hành và tăng tốc độ truy cập. Dữ liệu được quản lý dưới dạng **Static Files** (`.ts`) trong thư mục `lib/data/`.

**Quy trình:**
1.  **Data Definition**: Dữ liệu (giá, gói, câu hỏi) được định nghĩa trong `lib/data/*.ts`.
2.  **Import**: Các Component (ví dụ `PricingTabs.tsx`) import trực tiếp dữ liệu này.
3.  **Rendering**: Next.js render HTML tĩnh (Static Generation) hoặc Server-side Rendering tùy ngữ cảnh.
4.  **Interactivity**: Các Client Component (`'use client'`) như Tabs, Accordion sử dụng dữ liệu để hiển thị tương tác.

*Lợi ích: Không cần gọi API, không độ trễ database, dễ dàng chỉnh sửa bằng cách update code.*

## 5. Design Decisions

### 5.1. Component Composition
Trang chủ (`app/page.tsx`) chỉ đóng vai trò là container sắp xếp các section. Mỗi section (`components/sections/*`) là một module độc lập, tự quản lý nội dung và logic hiển thị của nó.

### 5.2. Styling System
Sử dụng **CSS Variables** kết hợp Tailwind (`app/globals.css`) để quản lý theme màu sắc. Điều này cho phép dễ dàng thay đổi toàn bộ màu sắc chủ đạo của trang (ví dụ chuyển sang Dark Mode hoặc đổi Brand Color) chỉ bằng cách sửa vài biến CSS.

### 5.3. Animation Strategy
Sử dụng `Framer Motion` với strategy:
- **Initial**: Opacity 0, y: 20 (ẩn và nằm thấp hơn vị trí).
- **WhileInView**: Opacity 1, y: 0 (hiện và trượt lên).
- **Viewport**: `once: true` (chỉ chạy animation 1 lần khi scroll tới để tránh rối mắt).

## 6. Mở rộng trong tương lai (Scalability)

- **CMS Integration**: Nếu dữ liệu nhiều lên, có thể chuyển `lib/data` thành các hàm `fetch()` gọi tới CMS (Sanity/Strapi) hoặc Google Sheets API.
- **Analytics**: Tích hợp Google Analytics hoặc PostHog vào `app/layout.tsx`.
- **Payment Gateway**: Tích hợp cổng thanh toán (QR Code automation hoặc Stripe) thay vì CTA chat Zalo.
