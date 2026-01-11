export type PricingItem = {
  tool: string;
  package: string;
  price: string;
  note?: string;
  warranty?: 'BHF' | 'KBH';
  isHighlight?: boolean;
  isOwner?: boolean;
};

export type PricingCategory = {
  id: string;
  name: string;
  description: string;
  items: PricingItem[];
};

export const pricingData: PricingCategory[] = [
  {
    id: 'ai-coding',
    name: 'AI Coding',
    description: 'Công cụ AI hỗ trợ code, debug, và tăng tốc workflow',
    items: [
      {
        tool: 'Cursor',
        package: 'Pro',
        price: '230k/tháng',
        isHighlight: true,
      },
      {
        tool: 'Cursor',
        package: 'Pro+',
        price: '680k/tháng',
      },
      {
        tool: 'Cursor',
        package: 'Ultra',
        price: 'Liên hệ',
      },
      {
        tool: 'ChatGPT',
        package: 'Plus (cấp slot)',
        price: '50k/tháng',
      },
      {
        tool: 'ChatGPT',
        package: 'Team chính chủ',
        price: '50k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'ChatGPT',
        package: 'Team 5 slot',
        price: '130k/tháng',
        warranty: 'BHF',
      },
      {
        tool: 'ChatGPT',
        package: 'Pro',
        price: '3tr2/tháng',
        warranty: 'BHF',
        isHighlight: true,
      },
      {
        tool: 'Grok',
        package: 'Super Grok 4 chính chủ',
        price: '220k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'JetBrains',
        package: 'Edu chính chủ',
        price: '80k/năm',
        isOwner: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 12k5 credit',
        price: '400k/tháng',
        note: 'Chính chủ',
        isOwner: true,
        isHighlight: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 25k credit',
        price: '500k/tháng',
        note: 'Chính chủ',
        isOwner: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 6k credit',
        price: '1tr8/năm',
        note: 'Chính chủ',
        isOwner: true,
      },
    ],
  },
  {
    id: 'ai-creative',
    name: 'AI Creative',
    description: 'Design, video, và các công cụ sáng tạo nội dung',
    items: [
      {
        tool: 'Canva',
        package: 'Edu',
        price: '40k/năm',
      },
      {
        tool: 'Canva',
        package: 'Pro',
        price: '110k/năm',
      },
      {
        tool: 'Capcut',
        package: 'Pro',
        price: '30k/tháng',
      },
      {
        tool: 'Figma',
        package: 'Edu chính chủ',
        price: '60k/năm',
        isOwner: true,
      },
      {
        tool: 'Veo Ultra',
        package: '25k credit',
        price: '25k',
      },
      {
        tool: 'Veo Ultra',
        package: '45k credit',
        price: '45k',
      },
      {
        tool: 'Veo Ultra',
        package: '45k credit + Gemini Ultra',
        price: '50k',
        warranty: 'BHF',
      },
      {
        tool: 'Perplexity',
        package: 'Pro 1 năm',
        price: '50k (KBH) / 200k (BHF)',
      },
      {
        tool: 'Các app khác',
        package: 'Kling, Runway, Suno, Heygen...',
        price: 'Inbox check giá',
        note: 'Higgsfield, Leonardo, Framer, Hailuo, OpenArt, Remaker, Manus, Genspark...',
      },
    ],
  },
  {
    id: 'cloud-storage',
    name: 'Cloud & Storage',
    description: 'Lưu trữ đám mây và công cụ năng suất',
    items: [
      {
        tool: 'Microsoft 365',
        package: '+ Copilot + 1TB OneDrive',
        price: '150k/năm',
      },
      {
        tool: 'Google One',
        package: '2TB + Gem Pro (chính chủ)',
        price: '150k/năm',
        isOwner: true,
      },
      {
        tool: 'Google One',
        package: '2TB + Gem Pro (fam 5 slot)',
        price: '450k/năm',
      },
      {
        tool: 'Google One',
        package: '5TB + Gem Pro (fam 5 slot)',
        price: '600k/năm',
      },
      {
        tool: 'Google One',
        package: '30TB + Gem Pro (fam 5 slot)',
        price: '2tr8/năm',
        isHighlight: true,
      },
    ],
  },
];
