'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Zap, Code2, Brain, CheckCircle2, ExternalLink } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Claude Code, Cline & 10+ tools',
    description: 'Hỗ trợ đầy đủ các coding tools phổ biến nhất',
  },
  {
    icon: Brain,
    title: 'API 4.7 với Thinking Mode',
    description: 'Xử lý task phức tạp với khả năng suy luận nâng cao',
  },
  {
    icon: Zap,
    title: 'Chất lượng 8/10 so với Claude',
    description: 'Hiệu suất gần tương đương, giá chỉ bằng 1/10',
  },
];

export function GLMPromo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
              Limited-Time Deal
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              GLM Coding Plan —{' '}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                API giá rẻ, chất lượng cao
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mua API trực tiếp với giá cực kỳ hợp lý. Bắt đầu chỉ từ{' '}
              <span className="font-semibold text-foreground">$3/tháng</span> — hoàn hảo cho coder cần công cụ mạnh mà không tốn kém.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-primary/20 bg-background shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Tại sao chọn GLM?</h3>
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Pricing & CTA */}
                <div className="flex flex-col justify-center items-center text-center p-6 bg-muted/50 rounded-2xl">
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">Bắt đầu từ</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        $3
                      </span>
                      <span className="text-muted-foreground">/tháng</span>
                    </div>
                  </div>

                  <ul className="text-sm text-left space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span>Hỗ trợ Claude Code & Cline</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span>10+ top coding tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span>Thinking mode cho task phức tạp</span>
                    </li>
                  </ul>

                  <Button size="lg" className="gap-2 text-base px-8" asChild>
                    <a
                      href="https://z.ai/subscribe?ic=5KTOS2WB3S"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Referral code: <code className="bg-muted px-1.5 py-0.5 rounded">5KTOS2WB3S</code>
                  </p>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Xem thêm chi tiết tại{' '}
                  <a
                    href="https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    z.ai/subscribe
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
