'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { DollarSign, Clock, HelpCircle, LayoutGrid } from 'lucide-react';

const painPoints = [
  {
    icon: DollarSign,
    title: 'Trả quá nhiều tiền',
    description: 'Cursor $20, ChatGPT $200/tháng... Giá quốc tế quá cao cho dev Việt',
  },
  {
    icon: Clock,
    title: 'Ngại commit dài hạn',
    description: 'Muốn dùng thử Pro nhưng không chắc có phù hợp với workflow',
  },
  {
    icon: HelpCircle,
    title: 'Không biết chọn gì',
    description: 'Quá nhiều AI tool, không rõ tool nào phù hợp nhu cầu coding',
  },
  {
    icon: LayoutGrid,
    title: 'Quản lý rối rắm',
    description: 'Nhiều account, nhiều subscription, khó theo dõi và gia hạn',
  },
];

export function PainPoints() {
  return (
    <section className="py-20 bg-background">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bạn đang gặp vấn đề này?</h2>
            <p className="text-muted-foreground text-lg">Mình hiểu, vì mình cũng từng đó</p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
