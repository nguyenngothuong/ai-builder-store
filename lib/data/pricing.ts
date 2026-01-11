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
        package: 'Pro chính chủ',
        price: '320k/tháng',
        warranty: 'BHF',
        isOwner: true,
        isHighlight: true,
      },
      {
        tool: 'Cursor',
        package: 'Pro+ chính chủ',
        price: '950k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Cursor',
        package: 'Ultra chính chủ',
        price: 'Liên hệ',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'ChatGPT',
        package: 'Plus (cấp slot)',
        price: '120k/tháng',
        warranty: 'BHF',
      },
      {
        tool: 'ChatGPT',
        package: 'Team chính chủ (model Pro)',
        price: '90k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'ChatGPT',
        package: 'Team add 5 slot',
        price: '250k/tháng',
        warranty: 'BHF',
      },
      {
        tool: 'ChatGPT',
        package: 'Pro',
        price: '3tr5/tháng',
        warranty: 'BHF',
        isHighlight: true,
      },
      {
        tool: 'Grok',
        package: 'Super Grok 4 chính chủ',
        price: '320k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'JetBrains',
        package: 'Edu chính chủ',
        price: '100k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 12k5 credit chính chủ',
        price: '450k/tháng',
        warranty: 'BHF',
        isOwner: true,
        isHighlight: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 25k credit chính chủ',
        price: '550k/tháng',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Antigravity + Gemini Ultra + Veo 3',
        package: '30TB + 6k credit chính chủ',
        price: '1tr9/năm',
        warranty: 'BHF',
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
        package: 'Edu chính chủ',
        price: '60k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Canva',
        package: 'Pro chính chủ',
        price: '200k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Capcut',
        package: 'Pro',
        price: '60k/tháng',
        warranty: 'BHF',
      },
      {
        tool: 'Figma',
        package: 'Edu chính chủ',
        price: '180k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Veo Ultra',
        package: '25k credit',
        price: '25k',
        warranty: 'BHF',
      },
      {
        tool: 'Veo Ultra',
        package: '45k credit',
        price: '45k',
        warranty: 'BHF',
      },
      {
        tool: 'Veo Ultra',
        package: '45k credit + Gemini Ultra (cấp)',
        price: '100k/tháng',
        warranty: 'BHF',
      },
      {
        tool: 'Perplexity',
        package: 'Pro 1 năm (KBH)',
        price: '50k',
        warranty: 'KBH',
      },
      {
        tool: 'Perplexity',
        package: 'Pro 1 năm (BHF)',
        price: '280k',
        warranty: 'BHF',
      },
      {
        tool: 'Các app khác',
        package: 'Kling, Runway, Suno, Heygen...',
        price: 'Inbox check giá',
        note: 'Higgsfield, Warp, Leonardo, Framer, Hailuo, OpenArt, Remaker, Manus, Genspark, Runninghub, Opusclip, z.ai, Flora Ai, Vidu, Gamma, Make, Mapify, Consensus, kits.ai...',
        warranty: 'BHF',
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
        package: '+ Copilot + 1TB OneDrive chính chủ',
        price: '250k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Google One',
        package: '2TB + Gem Pro (chính chủ)',
        price: '250k/năm',
        warranty: 'BHF',
        isOwner: true,
      },
      {
        tool: 'Google One',
        package: '2TB + Gem Pro (fam 5 slot)',
        price: '600k/năm',
        warranty: 'BHF',
      },
      {
        tool: 'Google One',
        package: '5TB + Gem Pro (fam 5 slot)',
        price: '950k/năm',
        warranty: 'BHF',
      },
      {
        tool: 'Google One',
        package: '30TB + Gem Pro (fam 5 slot)',
        price: '3tr/năm',
        warranty: 'BHF',
        isHighlight: true,
      },
    ],
  },
];
