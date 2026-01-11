import { siteConfig } from '@/lib/data/site';

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg">{siteConfig.name}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 {siteConfig.name}. All rights reserved.</p>
              <p className="mt-1">Tài khoản AI Premium cho developer Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
