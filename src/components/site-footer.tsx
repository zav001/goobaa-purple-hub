import logoAsset from "@/assets/goobaa-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <img
          src={logoAsset.url}
          alt="Goobaa Client"
          width={220}
          height={96}
          loading="lazy"
          className="h-7 w-auto"
        />
        <p className="text-xs text-muted-foreground">
          Not affiliated with Mojang, Microsoft or DonutSMP. Use at your own risk.
        </p>
      </div>
    </footer>
  );
}
