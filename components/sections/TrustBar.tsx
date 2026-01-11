'use client';

import { siteConfig } from '@/lib/data/site';
import { motion } from 'framer-motion';
import { Shield, Zap, Users } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    text: siteConfig.stats.support,
  },
  {
    icon: Shield,
    text: siteConfig.stats.warranty,
  },
  {
    icon: Users,
    text: siteConfig.stats.customers,
  },
];

export function TrustBar() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
