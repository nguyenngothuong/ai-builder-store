---
name: ai-builder-store-branding
description: Branding guidelines for AI Builder Store landing page. Use when creating new sections, components, or modifying existing UI elements to ensure visual consistency.
---

# AI Builder Store Branding Guidelines

## Site Identity

- **Name**: AI Builder Store
- **Tagline**: Tài khoản AI Premium cho Dev
- **Target**: Vietnamese developers and builders

## Color System

### Primary Colors
- Primary gradient: `from-primary via-blue-600 to-purple-600`
- Primary text gradient: `bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent`

### Background Colors
- Section alternate: `bg-muted/30` (for alternating sections)
- Default section: `bg-background`
- Hero gradient: `bg-gradient-to-b from-background via-background to-muted/20`
- CTA gradient: `bg-gradient-to-b from-muted/30 to-background`

### Semantic Colors
- Success/Check icons: `text-green-600 dark:text-green-400`
- Primary icon: `text-primary`
- Muted text: `text-muted-foreground`
- Links: `text-primary hover:underline`

## Component Patterns

### Container
```tsx
<div className="container px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w-4xl mx-auto"> {/* or max-w-5xl, max-w-6xl */}
    {/* content */}
  </div>
</div>
```

### Section
```tsx
<section className="py-20 bg-muted/30"> {/* or bg-background */}
  {/* container */}
</section>
```

### Icon Container
```tsx
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
  <IconName className="w-5 h-5 text-primary" />
</div>
```

For larger icons (WhyUs style):
```tsx
<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
  <IconName className="w-7 h-7 text-primary" />
</div>
```

### Card
```tsx
<Card className="p-6 border-primary/20 hover:shadow-lg transition-shadow">
  {/* content */}
</Card>
```

### Check List Item
```tsx
<div className="flex items-center gap-2">
  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
  <span>Feature text</span>
</div>
```

### Button (use shadcn/ui Button)
```tsx
<Button size="lg" className="gap-2 text-base px-8" asChild>
  <a href={url} target="_blank" rel="noopener noreferrer">
    Button Text
    <ArrowRight className="w-4 h-4" />
  </a>
</Button>
```

### Badge
```tsx
<Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
  Badge Text
</Badge>
```

## Animation Patterns (Framer Motion)

### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>
```

### Staggered Animation (for lists)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  {/* list item */}
</motion.div>
```

### Slide In from Left
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, delay: 0.3 }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>
```

## Typography

### Section Heading
```tsx
<h2 className="text-3xl sm:text-4xl font-bold mb-4">
  Heading Text —{' '}
  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
    Highlighted Text
  </span>
</h2>
```

### Section Description
```tsx
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Description text
</p>
```

### Card Title
```tsx
<h3 className="font-semibold text-lg mb-2">Title</h3>
```

### Card Description
```tsx
<p className="text-muted-foreground text-sm">Description</p>
```

## Required Imports

```tsx
'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
```

## File Structure

- Sections: `components/sections/SectionName.tsx`
- UI components: `components/ui/`
- Site config: `lib/data/site.ts`
- Pricing data: `lib/data/pricing.ts`

## CTA Links (from siteConfig)

```tsx
import { siteConfig } from '@/lib/data/site';

// Usage
<a href={siteConfig.cta.zalo}>Nhắn Zalo</a>
<a href={siteConfig.cta.telegram}>Nhắn Telegram</a>
```

## Do's and Don'ts

### Do
- Use `primary` color for brand elements
- Use `bg-muted/30` for alternating section backgrounds
- Use shadcn/ui Button component for CTAs
- Use Framer Motion `whileInView` for scroll animations
- Keep sections with `py-20` padding

### Don't
- Use custom gradient colors (violet, indigo) instead of primary
- Create custom button styles instead of using Button component
- Use inline styles for colors
- Skip dark mode support (always include dark: variants where needed)
