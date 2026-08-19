import { createFileRoute } from "@tanstack/react-router";
import {
  Crosshair,
  Cpu,
  ShieldCheck,
  Sparkles,
  Zap,
  Eye,
  Gauge,
  Download,
  MessageCircle,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModuleExplorer } from "@/components/ModuleExplorer";
import heroImage from "@/assets/hero-client.jpg";
import gridTexture from "@/assets/texture-grid.jpg";
import clientJar from "@/assets/GoobaaClient-1.21.11.jar.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goobaa Client — Free DonutSMP Utility Client" },
      {
        name: "description",
        content:
          "Goobaa Client is a free DonutSMP utility client with 200+ modules, ghost bypasses and buttery-smooth FPS. Auto Totem, Anchor Macro, ESP, HUD and more.",
      },
      { property: "og:title", content: "Goobaa Client — Free DonutSMP Utility Client" },
      {
        property: "og:description",
        content:
          "200+ modules built for DonutSMP: Auto Totem, Anchor Macro, ESP, Freecam and a fully themeable HUD. Free forever.",
      },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Versions", href: "#versions" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Ghost Bypasses",
    body: "Tuned rotations and packet handling that stay quiet on the strictest anticheats.",
  },
  {
    icon: Gauge,
    title: "FPS First",
    body: "A rebuilt render pipeline that gains frames instead of eating them, even on potato PCs.",
  },
  {
    icon: Crosshair,
    title: "PvP Suite",
    body: "Killaura, Reach, Velocity and AutoClicker profiles built by ranked practice players.",
  },
  {
    icon: Sparkles,
    title: "Full Customization",
    body: "Drag-and-drop HUD, per-module themes and a click GUI you can bend to your setup.",
  },
  {
    icon: Cpu,
    title: "Instant Updates",
    body: "New Minecraft drop? Goobaa ships a patched build within hours, not weeks.",
  },
  {
    icon: MessageCircle,
    title: "Built-in Help",
    body: "Every module has a description and tooltip right in the client, so you always know what a setting does.",
  },
];


const VERSIONS = ["1.21.11"];

const STATS = [
  { value: "200+", label: "Modules" },
  { value: "40K+", label: "Players" },
  { value: "1", label: "Version" },
  { value: "0€", label: "Forever free" },
];

const FAQ = [
  {
    q: "Is Goobaa Client really free?",
    a: "Yes. Every module, theme and future update is free. There is no paid tier, no key system and no reseller.",
  },
  {
    q: "Will Goobaa Client get me banned?",
    a: "Goobaa ships ghost-tuned bypasses for the major anticheats, but no client is risk-free. Play smart, use the recommended profiles, and never blatant on your main.",
  },
  {
    q: "Which Minecraft versions are supported?",
    a: "Goobaa Client is built specifically for Minecraft 1.21.11. Make sure your launcher is set to that version before installing.",
  },
  {
    q: "How do I install it?",
    a: "Download the installer, run it once, then launch the Goobaa profile from the vanilla launcher. No manual file copying required.",
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground glow-ring">
              <Layers className="size-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Goobaa<span className="text-primary"> Client</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="#download">Download</a>
          </Button>
        </nav>
      </header>

      <main id="top">
        <section className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-25 mix-blend-screen"
            style={{ backgroundImage: `url(${gridTexture})`, backgroundSize: "cover" }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full panel px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Zap className="size-3.5 text-primary" />
                Build 4.2 — for 1.21.11
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] font-bold sm:text-6xl lg:text-7xl">
                The <span className="text-gradient">purple</span> client built for DonutSMP
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Goobaa Client packs 200+ modules tuned for DonutSMP — Auto Totem, Anchor Macro, ESP
                and a render engine that gives you frames back. Free forever, updated weekly.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="#download">
                    <Download /> Download free
                  </a>
                </Button>
                <Button variant="heroGhost" size="xl" asChild>
                  <a href="#modules">
                    <Eye /> See modules
                  </a>
                </Button>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-bold text-primary">{stat.value}</dt>
                    <dd className="text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-6 -z-10 rounded-full bg-primary/40 blur-3xl animate-pulse-glow"
              />
              <img
                src={heroImage}
                alt="Goobaa Client in-game render with glowing purple effects"
                width={1600}
                height={1008}
                className="w-full rounded-xl border border-border panel animate-float"
              />
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Goobaa is built by players who actually queue. Every feature earns its slot.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="panel group rounded-xl p-6 transition-transform hover:-translate-y-1"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="modules" className="mx-auto max-w-6xl px-5 py-20">
          <div className="panel rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Find your next favorite feature
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Search the catalog, filter by category, then select a module to see what it does and
              how it can be configured.
            </p>
            <ModuleExplorer />
          </div>
        </section>


        <section id="versions" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Supported versions</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            One installer, every build. Pick your version and play.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {VERSIONS.map((version) => (
              <span
                key={version}
                className="rounded-lg border border-border bg-secondary/40 px-5 py-3 font-display text-sm font-semibold"
              >
                {version}
              </span>
            ))}
          </div>
        </section>

        <section id="download" className="mx-auto max-w-6xl px-5 py-20">
          <div className="panel relative overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-14">
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl animate-pulse-glow"
            />
            <h2 className="relative font-display text-3xl font-bold sm:text-5xl">
              Ready to go <span className="text-gradient">purple</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
              Download Goobaa Client, run the installer once, and launch from your normal launcher.
              Free, forever.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href={clientJar.url} download="GoobaaClient-1.21.11.jar">
                  <Download /> Download GoobaaClient 1.21.11 (.jar)
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">FAQ</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQ.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <span className="font-display text-sm font-semibold">
            Goobaa<span className="text-primary"> Client</span>
          </span>
          <p className="text-xs text-muted-foreground">
            Not affiliated with Mojang or Microsoft. Use at your own risk.
          </p>
        </div>
      </footer>
    </div>
  );
}
