import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  Menu,
  MessageCircleHeart,
  Phone,
  Pill,
  Plane,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ThermometerSun,
  UserRoundCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/remedall-pharmacy-logo.png.asset.json";
import heroImage from "@/assets/pharmacy-care.jpg";
import mark from "@/assets/Remedall_pharmacy_logo.png"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remedall Pharmacy | Local care, made simple" },
      { name: "description", content: "Friendly prescription support, health advice and community pharmacy services from Remedall Pharmacy." },
      { property: "og:title", content: "Remedall Pharmacy | Local care, made simple" },
      { property: "og:description", content: "Friendly prescription support, health advice and community pharmacy services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ["Home", "home"], ["Services", "services"], ["Prescriptions", "prescriptions"],
  ["Health", "health"], ["About", "about"], ["Contact", "contact"],
] as const;

const services = [
  { icon: Pill, title: "Prescription Services", text: "Reliable dispensing with clear, practical guidance from our pharmacy team." },
  { icon: CalendarCheck, title: "Repeat Prescriptions", text: "A straightforward way to request the regular medicines you rely on." },
  { icon: MessageCircleHeart, title: "Medication Support", text: "Friendly help understanding your medicines and getting the most from them." },
  { icon: Stethoscope, title: "Health Advice", text: "Confidential, approachable advice for everyday health concerns." },
  { icon: Plane, title: "Travel Health", text: "Prepare for your journey with tailored travel health guidance." },
  { icon: ThermometerSun, title: "Seasonal Health", text: "Timely support to help you and your family stay well through the year." },
];

const healthServices = [
  { icon: ShieldCheck, title: "Blood pressure checks", text: "A convenient check with clear next-step advice." },
  { icon: ThermometerSun, title: "Seasonal vaccinations", text: "Accessible protection when you need it most." },
  { icon: HeartHandshake, title: "Minor ailment support", text: "Speak to us first about common health concerns." },
  { icon: Plane, title: "Travel consultations", text: "Practical guidance tailored to your destination." },
];

const reviews = [
  { quote: "The team always takes time to explain things clearly. I never feel rushed, and collecting my medication is simple.", name: "Margaret H.", detail: "Local customer" },
  { quote: "A genuinely friendly pharmacy. They sorted my repeat prescription quickly and kept me updated throughout.", name: "Daniel P.", detail: "Prescription customer" },
  { quote: "Helpful, professional and welcoming every time. It feels reassuring to have this level of care nearby.", name: "Aisha K.", detail: "Local customer" },
];

function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">{title}</h2>
    {text && <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>}
  </div>;
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Remedall Pharmacy home">
    <span className={`grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-md ${inverse ? "bg-background" : "bg-secondary"}`}>
      <img src={mark} alt="" className="h-20 w-20 max-w-none object-contain" />
    </span>
    <span className="min-w-0 leading-none">
      <span className={`block truncate font-display text-xl font-bold ${inverse ? "text-primary-foreground" : "text-navy"}`}>Remedall</span>
      <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] ${inverse ? "text-mint-strong" : "text-primary"}`}>Pharmacy</span>
    </span>
  </a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submitRequest = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return <div className="min-h-screen overflow-x-hidden bg-background">
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><Button asChild size="lg"><a href="#prescriptions">Request a Prescription</a></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-7xl gap-1">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold hover:bg-muted">{label}</a>)}<Button asChild className="mt-3" size="lg"><a href="#prescriptions" onClick={() => setMenuOpen(false)}>Request a Prescription</a></Button></div>
      </nav>}
    </header>

    <main>
      <section id="home" className="relative min-h-[680px] overflow-hidden bg-canvas lg:min-h-[720px]">
        <img src={heroImage} alt="A local pharmacist helping a customer" width={1600} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[63%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-background)_0%,var(--color-background)_40%,color-mix(in_oklab,var(--color-background)_70%,transparent)_58%,transparent_78%)]" />
        <div className="section-shell relative flex min-h-[680px] items-center py-20 lg:min-h-[720px]">
          <div className="max-w-2xl reveal-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/90 px-4 py-2 text-sm font-semibold text-primary"><Sparkles className="h-4 w-4" /> Your neighbourhood pharmacy</div>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] text-navy sm:text-6xl lg:text-7xl">Local care,<br />made simple.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-foreground/80">Friendly advice, reliable prescriptions and everyday health support from a team that knows your community.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><a href="#prescriptions">Request a Prescription <ArrowRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#services">Our Services</a></Button></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-navy"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Friendly local team</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Confidential support</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-background"><div className="section-shell">
        <SectionHeading eyebrow="How we can help" title="Everyday pharmacy care, centred on you." text="From regular prescriptions to practical health advice, our team makes looking after your health feel straightforward." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => <article key={title} className="group bg-card p-7 transition-colors hover:bg-mint/45 sm:p-8"><div className="mb-6 grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="h-5 w-5" /></div><h3 className="text-xl font-semibold text-navy">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary">Learn more <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a></article>)}
        </div>
      </div></section>

      <section id="prescriptions" className="section-pad bg-navy text-primary-foreground"><div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-mint-strong">Prescription requests</p><h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Your regular medicines, without the runaround.</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/75">Send us the details of your request and our pharmacy team will contact you to confirm the next steps.</p>
          <ol className="mt-10 space-y-6">{[["01", "Tell us what you need"], ["02", "We review your request"], ["03", "We contact you when it’s ready"]].map(([number, text]) => <li key={number} className="flex items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-mint-strong/40 text-xs font-bold text-mint-strong">{number}</span><span className="font-semibold">{text}</span></li>)}</ol>
        </div>
        <form onSubmit={submitRequest} className="rounded-lg bg-background p-6 text-foreground shadow-2xl sm:p-9">
          <div className="mb-7"><h3 className="text-2xl font-semibold text-navy">Request a prescription</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Please do not use this form for urgent medical help.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">Full name<input required name="name" autoComplete="name" className="h-12 rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your full name" /></label>
            <label className="grid gap-2 text-sm font-bold">Date of birth<input required name="dob" type="date" className="h-12 rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>
            <label className="grid gap-2 text-sm font-bold">Phone number<input required name="phone" type="tel" autoComplete="tel" className="h-12 rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your phone number" /></label>
            <label className="grid gap-2 text-sm font-bold">Email address<input required name="email" type="email" autoComplete="email" className="h-12 rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" /></label>
            <label className="grid gap-2 text-sm font-bold sm:col-span-2">Medication details<textarea required name="details" rows={4} className="rounded-md border border-input bg-background px-4 py-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Medicine name, strength and quantity" /></label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted-foreground"><input required type="checkbox" className="mt-1 h-4 w-4 accent-primary" /> I confirm these details are correct and consent to being contacted about this request.</label>
          <Button type="submit" size="lg" className="mt-7 w-full">Send request <Send /></Button>
          {sent && <p role="status" className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">Thanks — your request has been recorded. The pharmacy team will be in touch.</p>}
        </form>
      </div></section>

      <section id="health" className="section-pad bg-canvas"><div className="section-shell">
        <SectionHeading centered eyebrow="Health services" title="Practical support, close to home." text="Speak with our trained team in a comfortable, confidential setting—often without needing an appointment." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{healthServices.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t-4 border-primary bg-card p-7 shadow-sm"><span className="mb-8 flex items-start justify-between text-primary"><Icon className="h-7 w-7" /><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></span><h3 className="text-lg font-semibold text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        <div className="mt-10 text-center"><Button asChild variant="outline" size="lg"><a href="#contact">Ask about a service <ArrowRight /></a></Button></div>
      </div></section>

      <section id="about" className="section-pad bg-background"><div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative"><img src={heroImage} alt="A Remedall pharmacist offering personal support" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover object-right shadow-lg" /><div className="absolute bottom-5 left-5 right-5 max-w-xs rounded-md bg-navy p-5 text-primary-foreground shadow-xl"><p className="text-3xl font-semibold">Care you can count on.</p><p className="mt-2 text-sm text-primary-foreground/70">Professional advice, with a personal touch.</p></div></div>
        <div><SectionHeading eyebrow="About Remedall" title="A pharmacy that feels part of the neighbourhood." text="We believe good healthcare starts with listening. Remedall Pharmacy brings together professional expertise and a genuinely personal approach, helping every customer feel informed, comfortable and cared for." />
          <p className="mt-5 leading-7 text-muted-foreground">Whether you are collecting a regular prescription, asking about a new concern or looking for everyday reassurance, you will find a friendly face ready to help.</p>
          <Button asChild variant="link" className="mt-6 h-auto p-0 text-base"><a href="#contact">Come and meet the team <ArrowRight /></a></Button>
        </div>
      </div></section>

      <section className="border-y border-border bg-mint"><div className="section-shell py-14"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Why choose us</p><h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Care built around real life.</h2></div><div className="grid gap-6 sm:grid-cols-2">{[[CalendarCheck, "Convenient Service"], [UserRoundCheck, "Friendly Support"], [HeartHandshake, "Local Care"], [MapPin, "Easy Access"]].map(([Icon, title]) => { const I = Icon as typeof CalendarCheck; return <div key={title as string} className="flex items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary"><I className="h-5 w-5" /></span><span className="font-bold text-navy">{title as string}</span></div>; })}</div></div></div></section>

      <section className="section-pad bg-background"><div className="section-shell"><SectionHeading centered eyebrow="From our community" title="Kind words from local customers." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="flex min-h-72 flex-col justify-between rounded-lg border border-border bg-card p-7"><div><div className="mb-6 text-sm tracking-[0.2em] text-primary" aria-label="Five stars">★★★★★</div><blockquote className="text-lg leading-8 text-navy">“{review.quote}”</blockquote></div><figcaption className="mt-8 border-t border-border pt-5"><strong className="block text-sm text-foreground">{review.name}</strong><span className="mt-1 block text-xs text-muted-foreground">{review.detail}</span></figcaption></figure>)}</div></div></section>

      <section id="contact" className="section-pad bg-canvas"><div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="rounded-lg bg-navy p-7 text-primary-foreground sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-mint-strong">Visit or call</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">We’re here when you need us.</h2><div className="mt-9 grid gap-6 sm:grid-cols-2"><div><div className="mb-3 flex items-center gap-2 font-bold"><MapPin className="h-5 w-5 text-mint-strong" /> Find us</div><p className="text-sm leading-6 text-primary-foreground/70">Your pharmacy address<br />Town or city<br />Postcode</p></div><div><div className="mb-3 flex items-center gap-2 font-bold"><Phone className="h-5 w-5 text-mint-strong" /> Contact</div><a href="tel:+440000000000" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">+44 (0) 0000 000 000</a><p className="mt-1 text-sm text-primary-foreground/70">hello@remedallpharmacy.co.uk</p></div></div>
          <div className="mt-10 border-t border-primary-foreground/15 pt-8"><div className="mb-4 flex items-center gap-2 font-bold"><Clock3 className="h-5 w-5 text-mint-strong" /> Opening hours</div><dl className="grid gap-3 text-sm">{[["Monday – Friday", "9:00 – 18:00"], ["Saturday", "9:00 – 13:00"], ["Sunday", "Closed"]].map(([day, hours]) => <div key={day} className="flex justify-between gap-4 border-b border-primary-foreground/10 pb-3"><dt className="text-primary-foreground/65">{day}</dt><dd className="font-semibold">{hours}</dd></div>)}</dl></div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-border bg-secondary"><div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "34px 34px" }} /><div className="absolute left-[18%] top-[20%] h-[55%] w-[65%] rotate-[-8deg] rounded-[50%] border-[22px] border-background/80" /><div className="absolute inset-0 grid place-items-center"><div className="relative text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl"><MapPin className="h-7 w-7" /></span><div className="mt-4 rounded-md bg-background px-5 py-3 shadow-lg"><p className="font-bold text-navy">Remedall Pharmacy</p><p className="mt-1 text-xs text-muted-foreground">Your local community pharmacy</p></div><Button asChild variant="navy" size="lg" className="mt-5"><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <ArrowRight /></a></Button></div></div></div>
      </div></section>

      <section className="bg-primary"><div className="section-shell flex flex-col items-start justify-between gap-7 py-14 sm:flex-row sm:items-center"><div><p className="text-sm font-bold text-mint">Your health, our priority.</p><h2 className="mt-2 text-3xl font-semibold text-primary-foreground sm:text-4xl">Need help from your local pharmacy?</h2></div><Button asChild variant="navy" size="lg"><a href="tel:+440000000000">Contact Our Pharmacy <Phone /></a></Button></div></section>
    </main>

    <footer className="bg-navy text-primary-foreground"><div className="section-shell py-14"><div className="grid gap-10 border-b border-primary-foreground/10 pb-12 md:grid-cols-2 lg:grid-cols-4"><div><Logo inverse /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/60">Friendly, professional pharmacy care for our local community.</p></div><div><h3 className="text-sm font-bold">Explore</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-primary-foreground/60">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="hover:text-primary-foreground">{label}</a>)}</div></div><div><h3 className="text-sm font-bold">Opening hours</h3><p className="mt-4 text-sm leading-7 text-primary-foreground/60">Mon–Fri: 9:00–18:00<br />Saturday: 9:00–13:00<br />Sunday: Closed</p></div><div><h3 className="text-sm font-bold">Keep in touch</h3><p className="mt-4 text-sm leading-7 text-primary-foreground/60">+44 (0) 0000 000 000<br />hello@remedallpharmacy.co.uk</p><div className="mt-5 flex gap-2"><Button variant="ghost" size="icon" aria-label="Facebook"><Facebook /></Button><Button variant="ghost" size="icon" aria-label="Instagram"><Instagram /></Button></div></div></div><div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Remedall Pharmacy. All rights reserved.</p><div className="flex gap-5"><a href="#home" className="hover:text-primary-foreground">Privacy Policy</a><a href="#home" className="hover:text-primary-foreground">Terms</a></div></div></div></footer>
  </div>;
}