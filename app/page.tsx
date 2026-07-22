import Image from "next/image";
import Link from "next/link";
import { Placeholder, Shell } from "@/components/site-shell";
import { sitePath } from "@/lib/site-path";

export default function Home() {
  return <Shell>
    <section className="hero">
      <div className="hero-image"><Placeholder label="Hero wedding moment" number="01" tall/></div>
      <div className="hero-copy"><p className="eyebrow">Wedding + elopement photo & film</p><h1>Artful imagery<br/>for <em>intimate</em><br/>wedding days.</h1><p>Preserving not only how it looked, but how it truly felt.</p><Link href="/portfolio" className="text-link">View our work <span>→</span></Link></div>
      <Image src={sitePath("/brand/illustrations/cupid.png")} alt="" width={180} height={180} className="hero-art"/>
    </section>
    <section className="manifesto"><p className="accent">You, fully present.</p><h2>Your love is not a production.<br/><em>It is a story already unfolding.</em></h2><p>We approach every celebration with quiet attention and thoughtful artistry—letting the honest, fleeting, beautifully imperfect moments lead.</p></section>
    <section className="editorial-collage"><Placeholder label="Quiet anticipation" number="02" tall/><div><Placeholder label="A held gaze" number="03"/><p className="caption">Documentary truth, shaped with an editorial eye.</p></div><Placeholder label="After the vows" number="04" tall dark/></section>
    <section className="services"><div className="services-heading"><p className="eyebrow">Ways we tell your story</p><h2>Photo. Film.<br/><em>Feeling, preserved.</em></h2></div>{[["01","Weddings","Honest coverage with an editorial sensibility."],["02","Films","Cinematic keepsakes filled with movement and sound."],["03","Elopements","Intimate stories, wherever they lead you."]].map(([n,t,c])=><Link href={`/${t.toLowerCase()}`} className="service-row" key={t}><span>{n}</span><h3>{t}</h3><p>{c}</p><b>↗</b></Link>)}</section>
    <section className="testimonial"><Image src={sitePath("/brand/illustrations/key.png")} alt="" width={170} height={170}/><p className="eyebrow">Kind words</p><blockquote>“They gave us permission to be completely ourselves—and somehow captured every feeling we never wanted to forget.”</blockquote><p className="byline">— Client story placeholder</p></section>
    <section className="process"><p className="accent">The experience</p><h2>Guided with care.<br/><em>Remembered forever.</em></h2><div className="process-grid">{[["01","Connect","We begin with your story, your priorities, and what feeling present looks like to you."],["02","Create","Gentle direction when it serves you. Quiet observation when the moment is already enough."],["03","Relive","A cohesive collection of photographs and films designed to deepen with time."]].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div><Link href="/experience" className="text-link">Explore the experience <span>→</span></Link></section>
  </Shell>;
}
