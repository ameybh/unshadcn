import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Unshadcn. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="https://github.com/yourusername/unshadcn">
                GitHub
              </Link>
            </Button>
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/themes">Themes</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
