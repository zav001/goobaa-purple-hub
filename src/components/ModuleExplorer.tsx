import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModuleEntry = {
  name: string;
  category: "Combat" | "Misc" | "Render" | "Visuals" | "Client";
  summary: string;
  details: string;
  settings: string[];
};

const CATEGORIES = ["All", "Combat", "Misc", "Render", "Visuals", "Client"] as const;

export const MODULE_CATALOG: ModuleEntry[] = [
  {
    name: "Auto Totem",
    category: "Combat",
    summary: "Never die to a dropped totem again.",
    details:
      "Instantly refills your offhand with a Totem of Undying the moment it pops, tuned for DonutSMP crystal fights and lag spikes.",
    settings: ["Delay (ticks)", "Only in combat", "Fallback item", "Inventory priority"],
  },
  {
    name: "Anchor Macro",
    category: "Combat",
    summary: "Full respawn anchor combos in one bind.",
    details:
      "Places, charges and detonates respawn anchors in the correct order with human-shaped timing so your Nether fights stay clean.",
    settings: ["Place delay", "Glowstone slot", "Auto swap back", "Max range"],
  },
  {
    name: "Aim Assist",
    category: "Combat",
    summary: "Subtle rotation help, not a snap-bot.",
    details:
      "Nudges your crosshair toward the closest valid target using smoothed rotations that stay inside legit-looking limits.",
    settings: ["Strength", "FOV", "Smoothing", "Target priority", "Require weapon"],
  },
  {
    name: "Shield Breaker",
    category: "Combat",
    summary: "Punch through shields automatically.",
    details:
      "Swaps to an axe, disables the opposing shield, then returns to your main weapon in the same tick window.",
    settings: ["Axe slot", "Swap back", "Only on block", "Cooldown"],
  },
  {
    name: "Auto Clicker",
    category: "Misc",
    summary: "Randomized CPS for both mouse buttons.",
    details:
      "Generates a jittered click pattern with realistic distribution curves, with separate profiles for left and right click.",
    settings: ["Min CPS", "Max CPS", "Jitter", "Break blocks", "Right click mode"],
  },
  {
    name: "Freecam",
    category: "Misc",
    summary: "Detach your camera and scout safely.",
    details:
      "Leaves your body in place while you fly the camera around to check bases, spawners and stashes without moving.",
    settings: ["Speed", "Noclip", "Show body", "Reset on toggle"],
  },
  {
    name: "NameProtect",
    category: "Misc",
    summary: "Hide your identity while streaming.",
    details:
      "Replaces your username, and optionally your friends', everywhere it appears — chat, tab list, nametags and HUD.",
    settings: ["Replacement name", "Hide friends", "Chat only", "Case match"],
  },
  {
    name: "StaffList",
    category: "Misc",
    summary: "Know when staff join the server.",
    details:
      "Watches the tab list for known DonutSMP staff accounts and warns you the second one shows up.",
    settings: ["Custom list", "Chat alert", "Sound alert", "Auto disable modules"],
  },
  {
    name: "Fullbright",
    category: "Render",
    summary: "See in caves without wasting potions.",
    details:
      "Raises the world gamma smoothly instead of clamping it, so dark areas stay readable without washing out colors.",
    settings: ["Mode", "Brightness", "Smooth fade", "Ignore night vision"],
  },
  {
    name: "PlayerESP",
    category: "Render",
    summary: "Track players through walls.",
    details:
      "Draws boxes, glow or outlines around players with distance and health readouts, colored by friend status.",
    settings: ["Shape", "Color mode", "Max distance", "Show health", "Friends only"],
  },
  {
    name: "StorageESP",
    category: "Render",
    summary: "Spot chests, shulkers and hoppers.",
    details:
      "Highlights every container in render distance with per-type colors, perfect for base sweeps and stash hunting.",
    settings: ["Chests", "Shulkers", "Hoppers", "Ender chests", "Fill opacity"],
  },
  {
    name: "Motion Blur",
    category: "Visuals",
    summary: "Cinematic frames without the FPS hit.",
    details:
      "Frame-blend based blur that reacts to your turn speed, with a strength slider that keeps text sharp.",
    settings: ["Strength", "Blur on movement only", "Max FPS cap", "Disable in combat"],
  },
  {
    name: "Custom Block Outline",
    category: "Visuals",
    summary: "Outline blocks in your own style.",
    details:
      "Full control over the block-highlight outline: thickness, color, fill, gradient and glow pulse.",
    settings: ["Thickness", "Color", "Fill", "Glow pulse", "Rainbow"],
  },
  {
    name: "HUD",
    category: "Client",
    summary: "Drag-and-drop info overlay.",
    details:
      "FPS, CPS, ping, coordinates, potion timers and armor status — every element movable and themeable.",
    settings: ["Elements", "Font", "Accent color", "Background opacity", "Scale"],
  },
  {
    name: "Spotify HUD",
    category: "Client",
    summary: "Now-playing widget with controls.",
    details:
      "Shows track, artist and album art in-game with skip and pause binds, no alt-tabbing mid-fight.",
    settings: ["Position", "Show album art", "Compact mode", "Media binds"],
  },
  {
    name: "Click GUI",
    category: "Client",
    summary: "Search, bind and theme everything.",
    details:
      "A searchable panel-based menu with per-module keybinds, config profiles and instant theme switching.",
    settings: ["Open key", "Theme", "Blur background", "Remember scroll", "Descriptions"],
  },
];

export function ModuleExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<ModuleEntry | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().slice(0, 100);
    return MODULE_CATALOG.filter(
      (m) =>
        (category === "All" || m.category === category) &&
        (q === "" ||
          m.name.toLowerCase().includes(q) ||
          m.summary.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search modules…"
            aria-label="Search modules"
            className="h-11 border-border bg-secondary/40 pl-9 pr-9"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No modules match that search. Try another keyword.
        </p>
      ) : (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((module) => (
            <li key={module.name}>
              <button
                type="button"
                onClick={() => setActive(module)}
                className="group h-full w-full rounded-xl border border-border bg-secondary/40 p-5 text-left transition-all hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/70"
              >
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-primary">
                  {module.category}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{module.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{module.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Click to explore
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <span className="w-fit rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-primary">
                  {active.category}
                </span>
                <DialogTitle className="font-display text-2xl">{active.name}</DialogTitle>
                <DialogDescription>{active.details}</DialogDescription>
              </DialogHeader>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Configurable settings
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {active.settings.map((setting) => (
                    <li
                      key={setting}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm"
                    >
                      {setting}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="mt-6 w-full" asChild>
                  <a href="#download">Get Goobaa Client</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
