import Image from "next/image";
import Link from "next/link";
import { sitePath } from "@/lib/site-path";

export const nav = [
  ["Weddings", "/weddings"], ["Films", "/films"], ["Elopements", "/elopements"],
  ["Portfolio", "/portfolio"], ["About", "/about"], ["Experience", "/experience"], ["Contact", "/contact"],
];

export function Header() {
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Featuring You home">
      <span>Featuring You</span><small>PHOTO + FILM</small>
    </Link>
    <nav aria-label="Main navigation" className="desktop-nav">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><nav>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
  </header>;
}

export function Footer() {
  return <footer className="footer texture">
    <div><p className="eyebrow">Your story, honestly told</p><h2>Let&apos;s make something<br/><em>worth remembering.</em></h2><Link className="text-link light" href="/contact">Begin your story <span>→</span></Link></div>
    <Image src={sitePath("/brand/illustrations/bouquet.png")} alt="" width={280} height={320} className="footer-art" />
    <div className="footer-bottom"><Link href="/" className="footer-logo">Featuring You</Link><p>Wedding & elopement photo + film<br/>Based in Las Vegas · Available worldwide</p><p>© {new Date().getFullYear()} Featuring You<br/>Made with intention</p></div>
  </footer>;
}

export function Shell({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/></>; }

export function Placeholder({ label, number = "01", tall = false, dark = false }: { label: string; number?: string; tall?: boolean; dark?: boolean }) {
  return <div className={`placeholder ${tall ? "tall" : ""} ${dark ? "dark" : ""}`} role="img" aria-label={`${label} photography placeholder`}><span>{number}</span><p>{label}</p><small>IMAGE TO COME</small></div>;
}

export function Intro({ kicker, title, italic, copy }: { kicker: string; title: string; italic: string; copy: string }) {
  return <section className="page-intro"><p className="eyebrow">{kicker}</p><h1>{title}<br/><em>{italic}</em></h1><p className="lede">{copy}</p></section>;
}
