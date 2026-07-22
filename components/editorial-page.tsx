import Image from "next/image";
import Link from "next/link";
import { Intro, Placeholder, Shell } from "./site-shell";
import { sitePath } from "@/lib/site-path";

type PageData = { kicker: string; title: string; italic: string; copy: string; quote: string; service: string; detail: string; art: string; };

export function EditorialPage({ data }: { data: PageData }) {
  return <Shell>
    <Intro kicker={data.kicker} title={data.title} italic={data.italic} copy={data.copy}/>
    <section className="feature-grid"><Placeholder label={data.service} number="01" tall/><div className="feature-copy"><p className="accent">Made to be felt</p><h2>Not a performance.<br/>A living memory.</h2><p>{data.detail}</p><Link href="/contact" className="text-link">Tell us your plans <span>→</span></Link></div><Placeholder label="The in-between" number="02"/></section>
    <section className="quote-band"><Image src={sitePath(data.art)} alt="" width={210} height={210}/><blockquote>“{data.quote}”</blockquote></section>
    <section className="story-strip"><div><p className="eyebrow">A glimpse into the story</p><h2>Unscripted moments,<br/><em>beautifully composed.</em></h2></div><div className="story-grid"><Placeholder label="Atmosphere" number="03"/><Placeholder label="Connection" number="04" dark/></div></section>
  </Shell>;
}
