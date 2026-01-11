# Plan - AI Builder Store Landing

## Current Situation
- Repo mới, chỉ có `account.txt` chứa danh sách tài khoản & giá
- Chưa có dự án Next.js
- Target: Dev/builder đang vọc AI tools cho coding

## Goal
- Landing page conversion-focused giới thiệu gói AI Premium
- Bảng giá rõ ràng theo 3 nhóm: AI Coding / AI Creative / Cloud & Storage
- FAQ trả lời câu hỏi về BHF/KBH, chính chủ vs slot
- CTA chính: nhắn Zalo/Telegram để tư vấn

## Tech Stack
- **Framework**: Next.js 14+ App Router, TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Data**: JSON/TS file (hardcode trong repo)
- **Deploy**: Vercel

## Content Structure & Modules

### 1. HERO SECTION (`components/sections/Hero.tsx`)
**Content:**
- **Headline**: "Code nhanh hơn, build nhiều hơn — với tài khoản AI Premium giá tốt nhất"
- **Subheadline**: "Cursor Pro, ChatGPT Pro, Gemini Ultra, JetBrains... Tất cả công cụ AI mà dev cần, một chỗ duy nhất. Giá chỉ từ 50k/tháng."
- **CTA Primary**: Button "Nhắn Zalo tư vấn"
- **CTA Secondary**: Link "Xem bảng giá" (smooth scroll)
- **Visual**: Gradient background, floating icons (AI tools logos)

### 2. TRUST BAR (`components/sections/TrustBar.tsx`)
**Content:**
- "Hỗ trợ 24/7"
- "Bảo hành full"
- "Đã phục vụ 500+ dev/builder"
- Layout: 3 columns với icons

### 3. PAIN POINTS (`components/sections/PainPoints.tsx`)
**Content:**
- **Headline**: "Bạn đang gặp vấn đề này?"
- **List**:
  - Trả quá nhiều cho từng tool AI riêng lẻ (Cursor $20, ChatGPT $200/tháng...)
  - Muốn dùng thử Pro nhưng ngại commit dài hạn
  - Không biết tool nào phù hợp workflow
  - Quản lý nhiều account rối rắm
- Layout: Grid 2x2 với icons

### 4. SOLUTION (`components/sections/Solution.tsx`)
**Content:**
- **Headline**: "AI Builder Store — Giải pháp cho dev thông minh"
- **Description**: "Mình cung cấp tài khoản Premium chính chủ & slot gia đình cho các công cụ AI hot nhất. Giá Việt, bảo hành rõ ràng, hỗ trợ setup."
- Layout: Text + illustration/mockup

### 5. PRICING TABLES (`components/sections/PricingTabs.tsx`)
**Content:** 3 tabs với bảng giá chi tiết

#### Tab 1: AI CODING (Highlighted)
| Công cụ | Gói | Giá | Ghi chú |
|---------|-----|-----|---------|
| Cursor | Pro | 230k/tháng | — |
| Cursor | Pro+ | 680k/tháng | — |
| Cursor | Ultra | Liên hệ | — |
| ChatGPT | Plus (cấp slot) | 50k/tháng | — |
| ChatGPT | Team chính chủ | 50k/tháng | BHF |
| ChatGPT | Team 5 slot | 130k/tháng | BHF |
| ChatGPT | Pro | 3tr2/tháng | BHF |
| Grok | Super Grok 4 chính chủ | 220k/tháng | BHF |
| JetBrains | Edu chính chủ | 80k/năm | — |
| Antigravity + Gemini Ultra + Veo 3 | 30TB + 12k5 credit | 400k/tháng | Chính chủ |
| Antigravity + Gemini Ultra + Veo 3 | 30TB + 25k credit | 500k/tháng | Chính chủ |
| Antigravity + Gemini Ultra + Veo 3 | 30TB + 6k credit | 1tr8/năm | Chính chủ |

#### Tab 2: AI CREATIVE
| Công cụ | Gói | Giá | Ghi chú |
|---------|-----|-----|---------|
| Canva | Edu | 40k/năm | — |
| Canva | Pro | 110k/năm | — |
| Capcut | Pro | 30k/tháng | — |
| Figma | Edu chính chủ | 60k/năm | — |
| Veo Ultra | 25k credit | 25k | — |
| Veo Ultra | 45k credit | 45k | — |
| Veo Ultra | 45k credit + Gemini Ultra | 50k | BHF |
| Perplexity | Pro 1 năm | 50k (KBH) / 200k (BHF) | — |
| Các app khác | Kling, Runway, Suno, Heygen... | Inbox | — |

#### Tab 3: CLOUD & STORAGE
| Công cụ | Gói | Giá | Ghi chú |
|---------|-----|-----|---------|
| Microsoft 365 | + Copilot + 1TB OneDrive | 150k/năm | — |
| Google One | 2TB + Gem Pro (chính chủ) | 150k/năm | — |
| Google One | 2TB + Gem Pro (fam 5 slot) | 450k/năm | — |
| Google One | 5TB + Gem Pro (fam 5 slot) | 600k/năm | — |
| Google One | 30TB + Gem Pro (fam 5 slot) | 2tr8/năm | — |

**Component details:**
- Tabs component (shadcn/ui)
- Table responsive với scroll horizontal trên mobile
- Highlight "BHF" badge màu xanh, "KBH" màu xám

### 6. WHY US (`components/sections/WhyUs.tsx`)
**Content:**
- **Headline**: "Tại sao chọn AI Builder Store?"
- **Grid 4 items**:
  1. **Shield Icon** - "Bảo hành rõ ràng" - "BHF = bảo hành full. Hỗ trợ đổi/hoàn nếu lỗi"
  2. **Zap Icon** - "Kích hoạt nhanh" - "Nhận account trong 5-30 phút"
  3. **Heart Icon** - "Hỗ trợ dev" - "Mình cũng là dev, hiểu bạn cần gì"
  4. **Wallet Icon** - "Giá Việt tốt nhất" - "Tiết kiệm 50-80% so với mua trực tiếp"

### 7. FAQ (`components/sections/FAQ.tsx`)
**Content:**
- **Q1**: BHF và KBH nghĩa là gì?
  - **A**: BHF = Bảo hành full (đổi mới nếu có vấn đề). KBH = Không bảo hành (giá rẻ hơn, phù hợp dùng thử).

- **Q2**: Tài khoản chính chủ khác gì slot gia đình?
  - **A**: Chính chủ = bạn là owner, toàn quyền. Slot gia đình = được add vào family plan, dùng đầy đủ tính năng nhưng không phải owner.

- **Q3**: Mình có thể dùng thử trước không?
  - **A**: Một số gói có trial/slot ngắn hạn. Inbox mình check từng case cụ thể nhé!

- **Q4**: Thanh toán như thế nào?
  - **A**: Chuyển khoản ngân hàng / Momo / ZaloPay. Nhận account ngay sau khi confirm.

- **Q5**: Có hỗ trợ setup không?
  - **A**: Có! Mình guide bạn từ A-Z, đặc biệt với Cursor, Antigravity, ChatGPT Team.

- **Q6**: Mua combo nhiều tool có giảm giá không?
  - **A**: Có giá ưu đãi cho combo. Inbox để mình báo giá đẹp nhất!

**Component**: Accordion (shadcn/ui)

### 8. FINAL CTA (`components/sections/FinalCTA.tsx`)
**Content:**
- **Headline**: "Sẵn sàng nâng cấp workflow của bạn?"
- **Subheadline**: "Inbox ngay để được tư vấn gói phù hợp với nhu cầu coding của bạn."
- **Buttons**:
  - Primary: "Nhắn Zalo"
  - Secondary: "Nhắn Telegram"
- Layout: Center-aligned, gradient background

## Data Files

### `lib/data/pricing.ts`
```ts
export type PricingItem = {
  tool: string
  package: string
  price: string
  note?: string
  warranty?: 'BHF' | 'KBH'
  isHighlight?: boolean
}

export type PricingCategory = {
  id: string
  name: string
  items: PricingItem[]
}

export const pricingData: PricingCategory[] = [...]
```

### `lib/data/faq.ts`
```ts
export type FAQItem = {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [...]
```

### `lib/data/site.ts`
```ts
export const siteConfig = {
  name: 'AI Builder Store',
  description: 'Tài khoản AI Premium cho dev với giá tốt nhất',
  cta: {
    zalo: 'https://zalo.me/...',
    telegram: 'https://t.me/...'
  }
}
```

## Component Structure

```
components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── tabs.tsx
│   ├── accordion.tsx
│   └── ...
├── sections/
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── PainPoints.tsx
│   ├── Solution.tsx
│   ├── PricingTabs.tsx
│   ├── WhyUs.tsx
│   ├── FAQ.tsx
│   └── FinalCTA.tsx
└── layout/
    └── Navbar.tsx (optional)
```

## Affected Files
- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout + fonts + metadata
- `app/globals.css` - Tailwind base + custom CSS
- `components/sections/*.tsx` - 8 section components
- `components/ui/*.tsx` - shadcn/ui primitives
- `lib/data/*.ts` - Pricing, FAQ, Site config
- `tailwind.config.ts` - Custom theme colors
- `package.json` - Dependencies

## Implementation Steps
1. ✅ Plan.md chi tiết
2. Khởi tạo Next.js + TypeScript
3. Setup Tailwind + shadcn/ui (button, card, tabs, accordion)
4. Cài Framer Motion
5. Tạo data files (pricing.ts, faq.ts, site.ts)
6. Build từng section component
7. Compose page.tsx
8. Responsive + animation polish
9. Test & deploy Vercel

## Risks & Edge Cases
- Bảng giá dài → dùng tabs + responsive table
- Giá format (k, tr) → helper function formatPrice()
- BHF/KBH badge → component Badge với variant
- Mobile: table scroll horizontal, CTA sticky bottom
- SEO: metadata, structured data cho pricing
- Link Zalo/Telegram cần update thật trước deploy
