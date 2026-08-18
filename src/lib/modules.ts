export type ModuleCategory = "Combat" | "Misc" | "Render" | "Visuals" | "Client";

export interface ClientModule {
  name: string;
  category: ModuleCategory;
  summary: string;
  description: string;
  settings: string[];
}

export const MODULE_CATEGORIES: ("All" | ModuleCategory)[] = [
  "All",
  "Combat",
  "Misc",
  "Render",
  "Visuals",
  "Client",
];

export const MODULES: ClientModule[] = [
  {
    name: "Auto Totem",
    category: "Combat",
    summary: "Never die with a totem in your inventory.",
    description:
      "Instantly swaps a Totem of Undying into your offhand the moment your health drops below the configured threshold. Tuned for DonutSMP crystal fights and lag spikes.",
    settings: ["Health threshold", "Swap delay (ms)", "Offhand priority", "Only while in combat"],
  },
  {
    name: "Anchor Macro",
    category: "Combat",
    summary: "One-key respawn anchor combos.",
    description:
      "Places, charges and detonates respawn anchors in a single bind with human-like timing so your combos land clean in the nether.",
    settings: ["Bind", "Glowstone slot", "Place delay", "Auto re-center"],
  },
  {
    name: "Aim Assist",
    category: "Combat",
    summary: "Subtle rotation smoothing on your target.",
    description:
      "Nudges your crosshair toward the closest valid target with configurable smoothing curves. Built to look like a good player, not a robot.",
    settings: ["FOV", "Smoothing", "Max range", "Target priority", "Only when clicking"],
  },
  {
    name: "Shield Breaker",
    category: "Combat",
    summary: "Axe-swap the moment a shield goes up.",
    description:
      "Detects a blocking opponent and swaps to your axe to disable the shield, then swaps straight back to your sword.",
    settings: ["Axe slot", "Swap back delay", "Only on players", "Require sprint"],
  },
  {
    name: "Auto Clicker",
    category: "Misc",
    summary: "Randomised CPS for both mouse buttons.",
    description:
      "Human-like click patterns with jitter and burst options, separate profiles for left and right click, and blocking-aware behaviour.",
    settings: ["Min CPS", "Max CPS", "Jitter", "Break blocks", "Right click mode"],
  },
  {
    name: "Freecam",
    category: "Misc",
    summary: "Detach your camera and scout ahead.",
    description:
      "Fly your view anywhere while your body stays put — perfect for checking bases, stashes and rooftops before you commit.",
    settings: ["Speed", "Bind", "Show player model", "Reset on toggle"],
  },
  {
    name: "NameProtect",
    category: "Misc",
    summary: "Hide your identity while streaming.",
    description:
      "Replaces your username, and optionally friends' names, everywhere it appears — chat, tab list, nametags and scoreboards.",
    settings: ["Replacement name", "Hide skins", "Protect friends", "Chat only"],
  },
  {
    name: "StaffList",
    category: "Misc",
    summary: "Know when staff join the server.",
    description:
      "Tracks a watchlist of staff usernames and alerts you the moment one appears in tab or nearby, with an optional auto-disable panic action.",
    settings: ["Watchlist", "Alert sound", "Panic disable", "Toast duration"],
  },
  {
    name: "Fullbright",
    category: "Render",
    summary: "See in caves without night vision.",
    description:
      "Raises world brightness with a gamma or ambient-light mode that keeps shaders and resource packs looking correct.",
    settings: ["Mode", "Brightness", "Smooth transition"],
  },
  {
    name: "PlayerESP",
    category: "Render",
    summary: "Highlight players through walls.",
    description:
      "Renders boxes, outlines or glow on nearby players with distance-based colouring and friend/enemy separation.",
    settings: ["Shape", "Line width", "Range", "Friend colour", "Enemy colour"],
  },
  {
    name: "StorageESP",
    category: "Render",
    summary: "Spot chests, shulkers and barrels.",
    description:
      "Outlines every container in render distance, colour-coded by type — the fastest way to clear a DonutSMP base.",
    settings: ["Chests", "Shulkers", "Barrels", "Hoppers", "Tracer lines"],
  },
  {
    name: "Motion Blur",
    category: "Visuals",
    summary: "Cinematic frame smearing.",
    description:
      "Adds a lightweight motion blur pass that makes clips look buttery without tanking your frame rate.",
    settings: ["Amount", "Only while moving", "Disable in menus"],
  },
  {
    name: "Custom Block Outline",
    category: "Visuals",
    summary: "Recolour and thicken block outlines.",
    description:
      "Replace vanilla's thin black outline with your own colour, width and glow so your scaffolding and mining reads clearly.",
    settings: ["Colour", "Width", "Glow", "Fill opacity"],
  },
  {
    name: "HUD",
    category: "Client",
    summary: "Drag-and-drop overlay for everything.",
    description:
      "FPS, ping, coordinates, potion timers, armour and keystrokes — all movable, resizable and themeable in the HUD editor.",
    settings: ["Elements", "Scale", "Accent colour", "Background opacity"],
  },
  {
    name: "Spotify HUD",
    category: "Client",
    summary: "Control your music in-game.",
    description:
      "Shows the current track with album art and skip/pause binds so you never alt-tab mid-fight.",
    settings: ["Account link", "Position", "Show album art", "Skip bind"],
  },
  {
    name: "Click GUI",
    category: "Client",
    summary: "The control room for every module.",
    description:
      "Search, bind, favourite and theme all 200+ modules from one keystroke, with per-profile configs you can export and share.",
    settings: ["Open bind", "Theme", "Blur background", "Search on open"],
  },
];
