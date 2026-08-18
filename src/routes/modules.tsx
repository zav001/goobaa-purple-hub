import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MODULE_CATEGORIES, MODULES, type ClientModule } from "@/lib/modules";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules — Goobaa Client for DonutSMP" },
      {
        name: "description",
        content:
          "Browse every Goobaa Client module: search the catalog, filter by Combat, Misc, Render, Visuals or Client, and see how each one is configured.",
      },
      { property: "og:title", content: "Modules — Goobaa Client for DonutSMP" },
      {
        property: "og:description",
        content:
          "Search the Goobaa Client catalog, filter by category, and select a module to see what it does and how it can be configured.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ModulesPage,
});

function ModulesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof MODULE_CATEGORIES)[number]>("All");
  const [selected, setSelected] = useState<ClientModule | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MODULES.filter(
      (module) =>
        (category === "All" || module.category === category) &&
        (q === "" ||
          module.name.toLowerCase().includes(q) ||
          module.summary.toLowerCase().includes(q) ||
          module.category.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-primary">
          DonutSMP utility client
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Find your next favorite <span className="text-gradient">feature</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Search the catalog, filter by category, then select a module to see what it does and how it
          can be configured.
        </p>

        <div className="panel mt-10 rounded-xl p-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search modules…"
              aria-label="Search modules"
              className="h-11 border-border bg-secondary/40 pl-10 text-base"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="mr-1 size-4 text-muted-foreground" />
            {MODULE_CATEGORIES.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`cursor-pointer rounded-full border px-4 py-1.5 font-display text-xs uppercase tracking-wider transition-colors ${
                  category === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "module" : "modules"}
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((module) => (
            <button
              key={module.name}
              onClick={() => setSelected(module)}
              className="panel group cursor-pointer rounded-xl p-5 text-left transition-transform hover:-translate-y-1"
            >
              <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-primary">
                {module.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">{module.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{module.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                Click to explore
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>

        {results.length === 0 && (
          <div className="panel mt-5 rounded-xl p-10 text-center">
            <p className="font-display text-lg font-semibold">No modules match that search</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword or reset the filters.
            </p>
            <Button
              variant="heroGhost"
              size="sm"
              className="mt-5"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </main>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="border-border bg-card sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <span className="w-fit rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-primary">
                  {selected.category}
                </span>
                <DialogTitle className="font-display text-2xl">{selected.name}</DialogTitle>
                <DialogDescription className="text-base">{selected.summary}</DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{selected.description}</p>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-foreground">
                  Configurable settings
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selected.settings.map((setting) => (
                    <li
                      key={setting}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground"
                    >
                      {setting}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
