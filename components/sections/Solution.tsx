'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Tài khoản Premium chính chủ & slot gia đình',
  'Giá Việt, tiết kiệm 50-80% so với mua trực tiếp',
  'Bảo hành rõ ràng, hỗ trợ đổi/hoàn nếu lỗi',
  'Kích hoạt nhanh, nhận account trong 5-30 phút',
];

export function Solution() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Builder Store —{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Giải pháp cho dev thông minh
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mình cung cấp tài khoản Premium cho các công cụ AI hot nhất. 
              Từ coding đến creative, tất cả đều có ở một nơi.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
