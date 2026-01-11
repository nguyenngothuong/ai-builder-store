'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pricingData } from '@/lib/data/pricing';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function PricingTabs() {
  return (
    <section id="pricing" className="py-20 bg-background">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bảng giá & Gói dịch vụ</h2>
            <p className="text-muted-foreground text-lg">Chọn công cụ phù hợp với nhu cầu của bạn</p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="ai-coding" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                {pricingData.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm sm:text-base">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {pricingData.map((category, catIndex) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="mb-6 text-center">
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="min-w-[640px]">
                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 rounded-t-lg font-semibold text-sm">
                        <div className="col-span-3">Công cụ</div>
                        <div className="col-span-4">Gói</div>
                        <div className="col-span-3">Giá</div>
                        <div className="col-span-2">Ghi chú</div>
                      </div>

                      {/* Table Body */}
                      <div className="space-y-2">
                        {category.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Card
                              className={`grid grid-cols-12 gap-4 px-6 py-4 items-center hover:shadow-md transition-all ${
                                item.isHighlight ? 'border-primary bg-primary/5' : ''
                              }`}
                            >
                              <div className="col-span-3 font-medium flex items-center gap-2">
                                {item.tool}
                                {item.isHighlight && <Crown className="w-4 h-4 text-primary" />}
                              </div>
                              <div className="col-span-4 text-muted-foreground">{item.package}</div>
                              <div className="col-span-3 font-semibold">{item.price}</div>
                              <div className="col-span-2 flex gap-1 flex-wrap">
                                {item.warranty && (
                                  <Badge variant={item.warranty === 'BHF' ? 'default' : 'secondary'} className="text-xs">
                                    {item.warranty}
                                  </Badge>
                                )}
                                {item.isOwner && (
                                  <Badge variant="outline" className="text-xs">
                                    Chính chủ
                                  </Badge>
                                )}
                                {item.note && !item.isOwner && (
                                  <span className="text-xs text-muted-foreground">{item.note}</span>
                                )}
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>
              <Badge variant="default" className="mr-2">
                BHF
              </Badge>
              = Bảo hành full |{' '}
              <Badge variant="secondary" className="mx-2">
                KBH
              </Badge>
              = Không bảo hành
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
