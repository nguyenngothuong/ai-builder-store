'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Bảo hành rõ ràng',
    description: 'BHF = bảo hành full. Hỗ trợ đổi/hoàn nếu lỗi',
  },
  {
    icon: Zap,
    title: 'Kích hoạt nhanh',
    description: 'Nhận account trong 5-30 phút',
  },
  {
    icon: Heart,
    title: 'Hỗ trợ dev',
    description: 'Mình cũng là dev, hiểu bạn cần gì',
  },
  {
    icon: Wallet,
    title: 'Giá Việt tốt nhất',
    description: 'Tiết kiệm 50-80% so với mua trực tiếp',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tại sao chọn AI Builder Store?</h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
