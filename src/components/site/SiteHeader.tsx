import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export const navItems = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "border-b bg-background/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-stone" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="ink" size="default" className="px-5">
            <Link to="/contact">
              Start a project <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-18 bottom-0 z-40 flex flex-col bg-background px-6 pb-10 pt-6 md:hidden animate-in fade-in slide-in-from-top-2"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {[{ to: "/", label: "Home" } as const, ...navItems, { to: "/contact", label: "Contact" } as const].map(
              (item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-baseline justify-between border-b py-5 font-display text-4xl"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "italic text-slate-deep" }}
                >
                  {item.label}
                  <span className="eyebrow text-taupe">0{i + 1}</span>
                </Link>
              ),
            )}
          </nav>
          <Button asChild variant="ink" size="xl" className="mt-auto w-full">
            <Link to="/contact">
              Let's Solve It <ArrowUpRight />
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
