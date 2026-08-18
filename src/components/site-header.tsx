import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/goobaa-logo.png.asset.json";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Modules", to: "/modules" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Goobaa Client"
            width={220}
            height={96}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="hero" size="sm" asChild>
            <Link to="/" hash="download">
              Download
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
