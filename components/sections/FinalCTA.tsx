'use client';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/data/site';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Background decoration */}
            <div className="relative">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sẵn sàng nâng cấp workflow của bạn?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Inbox ngay để được tư vấn gói phù hợp với nhu cầu coding của bạn.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="gap-2 text-base px-8" asChild>
                  <a href={siteConfig.cta.zalo} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Nhắn Zalo
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-base px-8" asChild>
                  <a href={siteConfig.cta.telegram} target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5" />
                    Nhắn Telegram
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
