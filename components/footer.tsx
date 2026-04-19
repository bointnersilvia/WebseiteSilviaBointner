import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Heart className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Silvia Bointner. Alle Rechte vorbehalten.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}