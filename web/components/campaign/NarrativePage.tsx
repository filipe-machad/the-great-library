"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Divider } from "@/components/narrative/Divider";
import { NarrativeAppendix } from "@/components/narrative/NarrativeAppendix";
import type { Campaign, CampaignChapter } from "@/lib/campaigns";
import {
  type BibliotecaConto,
  heroObjectPositionClass,
  type HeroObjectPosition,
} from "@/lib/contos";
import { LaeylaNarrativeBody } from "@/components/campaign/LaeylaNarrativeBody";
import { CalculoDasSombrasBody } from "@/components/campaign/CalculoDasSombrasBody";
import {
  BookOpen,
  BookMarked,
  ScrollText,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export type NarrativePageProps =
  | { variant: "campaign"; campaign: Campaign; chapter: CampaignChapter }
  | { variant: "tale"; tale: BibliotecaConto };

type HeroMediaShape = NonNullable<CampaignChapter["heroMedia"]>;

function HeroMediaDisplay({
  heroMedia,
  altTitle,
  objectPosition = "mid",
}: {
  heroMedia: HeroMediaShape;
  altTitle: string;
  objectPosition?: HeroObjectPosition;
}) {
  const posClass = heroObjectPositionClass(objectPosition);
  return (
    <div
      className="relative mx-auto w-full max-h-[min(96vh,54rem)] overflow-hidden aspect-[4/3] min-h-[min(42vh,20rem)] sm:aspect-[21/9] sm:min-h-0 sm:max-h-[min(82vh,52rem)]"
      style={{ backgroundColor: "var(--hero-fade-base)" }}
    >
      {heroMedia.type === "video" ? (
        <video
          src={heroMedia.src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover ${posClass}`}
        />
      ) : (
        <Image
          src={heroMedia.src}
          alt={heroMedia.alt ?? altTitle}
          fill
          className={`object-cover ${posClass}`}
          priority
        />
      )}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] sm:h-[66%] dark:h-[76%] dark:sm:h-[70%]"
        style={{
          background: "var(--hero-media-fade)",
        }}
      />
    </div>
  );
}

/** Sticky only within its parent section — scrolls away when the section ends. */
function SectionAside({
  children,
  alignBottom = false,
}: {
  children: React.ReactNode;
  /** Alinha o card ao fundo da grelha (última secção com texto mais baixo que o aside). */
  alignBottom?: boolean;
}) {
  const selfAlign = alignBottom ? "lg:self-end" : "lg:self-start";
  return (
    <aside
      className={`mb-10 lg:mb-0 lg:sticky lg:top-24 ${selfAlign} shrink-0 w-full max-w-md mx-auto lg:max-w-none lg:w-[min(100%,15rem)] xl:w-72`}
    >
      {children}
    </aside>
  );
}

function AsideCardFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-sm"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </div>
  );
}

function LoreNoteCard() {
  return (
    <AsideCardFrame>
      <div className="px-5 pt-5 pb-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <ScrollText
              size={16}
              strokeWidth={1.65}
              style={{ color: "var(--accent-gold)" }}
              aria-hidden
            />
            <span
              className="text-xs small-caps tracking-[0.1em]"
              style={{ color: "var(--secondary-ink)" }}
            >
              Nota de Lore
            </span>
          </div>
        </div>
        <h4
          className="text-base mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          Zonas de Convergência
        </h4>
        <div
          className="text-sm leading-relaxed"
          style={{ color: "var(--secondary-ink)" }}
        >
          <p style={{ marginBottom: "0.5rem" }}>
            Pontos onde a azü se adensa a ponto de tornar-se visível — veios
            luminosos sob a terra, ar carregado de energia. Perto de uma zona de
            convergência, artefatos imbuídos reagem sem controle.
          </p>
          <p style={{ marginBottom: 0 }}>
            O cheiro de ferro frio indica perturbação grave da azü local.
          </p>
        </div>
      </div>
    </AsideCardFrame>
  );
}

function MappedArtifactCard() {
  return (
    <AsideCardFrame>
      <div className="px-5 pt-5 pb-0" >
        <div className="flex items-center gap-2 mb-1">
          <BookOpen size={16} style={{ color: "var(--accent-gold)" }} />
          <span
            className="text-xs small-caps tracking-[0.1em]"
            style={{ color: "var(--secondary-ink)" }}
          >
            Artefato Mapeado
          </span>
        </div>
      </div>
      <div className="px-5 pt-1 pb-1">
        <Image
          src="/assets/illustrations/egor-poskryakov-frame-3.jpg"
          alt="Ilustração do espelho trincado sob luz fria"
          width={520}
          height={360}
          className="w-full h-auto max-h-[240px] object-contain mt-2 rounded-lg"
        />
      </div>
      <div className="px-5 pb-5 pt-5">
        <h4
          className="text-base mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          Espelho Trincado
        </h4>
        <div
          className="text-sm leading-relaxed"
          style={{ color: "var(--secondary-ink)" }}
        >
          <p style={{ marginBottom: "0.5rem" }}>
            Espelho imbuído de feitura refinada, superfície rachada em padrão de
            teia. Revela no reflexo o que os olhos nus não conseguem ver —
            inclusive manifestações invisíveis de azü.
          </p>
          <p style={{ marginBottom: 0 }}>
            Origem desconhecida. Classificação pendente.
          </p>
        </div>
      </div>
    </AsideCardFrame>
  );
}

function AboutFulanoCard({
  showAppendixNavIcon = false,
}: {
  /** Só no apêndice mobile: ícone que indica destino navegável. */
  showAppendixNavIcon?: boolean;
}) {
  return (
    <Link
      href="/azu/characters/seren-aelyra"
      className="group relative block rounded-lg overflow-hidden border shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:-translate-y-0.5 hover:shadow-md before:absolute before:left-0 before:top-0 before:w-1.5 before:h-0 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out hover:before:h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      aria-label="Ver dossiê de Seren Aelyra"
    >
      {showAppendixNavIcon ? (
        <span
          className="pointer-events-none absolute right-2.5 top-2.5 z-[1] flex h-7 w-7 items-center justify-center rounded-full lg:hidden"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--accent-gold) 14%, var(--card))",
            border:
              "1px solid color-mix(in srgb, var(--accent-gold) 32%, var(--border) 68%)",
            color: "var(--accent-gold)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
          }}
          aria-hidden
        >
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
      ) : null}
      <div className="px-5 pt-5 pb-4 relative">
        <div className="flex gap-3 mb-4">
          <div
            className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full border-2"
            style={{ borderColor: "var(--accent-gold)" }}
          >
            <Image
              src="/assets/illustrations/toraji-20210619-ancient-lightchange-15-low.jpg"
              alt="Retrato de Seren Aelyra"
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 pt-0.5">
            <p
              className="text-base font-medium mb-0.5 group-hover:text-[var(--accent-gold)] transition-colors duration-300 ease-out"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
              }}
            >
              Seren Aelyra
            </p>
            <p
              className="text-[0.65rem] small-caps tracking-[0.14em] mb-0"
              style={{ color: "var(--secondary-ink)", opacity: 0.85 }}
            >
              Vidente da Terceira Veia
            </p>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--secondary-ink)" }}
        >
          Artesã do Círculo do Leme Cinzento que mapeia Veias rasas e lê o
          contorno da azü como maré. Dizem que reconheceu, num reflexo partido,
          um padrão que só deveria existir em santuários selados.
        </p>

        <div
          className="pt-3 space-y-2 text-sm"
          style={{ borderTop: "1px solid var(--divider)" }}
        >
          <div className="flex justify-between gap-4">
            <span style={{ color: "var(--secondary-ink)" }}>Afiliação:</span>
            <span className="text-right" style={{ color: "var(--secondary-ink)" }}>
              Círculo do Leme Cinzento
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span style={{ color: "var(--secondary-ink)" }}>Status:</span>
            <span className="text-right" style={{ color: "var(--secondary-ink)" }}>
              Em trânsito (Marco Fendido)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function AboutCampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <AsideCardFrame>
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <BookMarked size={16} style={{ color: "var(--accent-gold)" }} />
          <span
            className="text-xs small-caps tracking-[0.1em]"
            style={{ color: "var(--secondary-ink)" }}
          >
            Sobre a Campanha
          </span>
        </div>
        <h4
          className="text-base mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          {campaign.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-0"
          style={{ color: "var(--secondary-ink)" }}
        >
          {campaign.summary}
        </p>
      </div>
    </AsideCardFrame>
  );
}

function AboutTaleCard({ tale }: { tale: BibliotecaConto }) {
  return (
    <AsideCardFrame>
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <BookMarked size={16} style={{ color: "var(--accent-gold)" }} />
          <span
            className="text-xs small-caps tracking-[0.1em]"
            style={{ color: "var(--secondary-ink)" }}
          >
            Sobre o conto
          </span>
        </div>
        <h4
          className="text-base mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          {tale.title}
        </h4>
        <p
          className="text-sm leading-relaxed mb-0"
          style={{ color: "var(--secondary-ink)" }}
        >
          {tale.summary}
        </p>
      </div>
    </AsideCardFrame>
  );
}

function narrativeSectionClassName(align: "start" | "end" = "start") {
  /* Margens moderadas: secções só existem pelo layout (sticky); evita “vão” entre parágrafos adjacentes.
     `end`: última linha da coluna principal alinha ao fundo do card lateral (mesma baseline visual). */
  const alignItems = align === "end" ? "lg:items-end" : "lg:items-start";
  return `lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,15rem)] xl:grid-cols-[minmax(0,1fr)_18rem] gap-x-10 xl:gap-x-12 ${alignItems} mb-1 lg:mb-1 last:mb-0`;
}

export function NarrativePage(props: NarrativePageProps) {
  const isTale = props.variant === "tale";
  const tale = isTale ? props.tale : null;
  const campaign = !isTale ? props.campaign : null;
  const chapter = !isTale ? props.chapter : null;

  const currentIndex =
    campaign && chapter
      ? campaign.chapters.findIndex((ch) => ch.slug === chapter.slug)
      : -1;
  const prevChapter =
    campaign && currentIndex > 0 ? campaign.chapters[currentIndex - 1] : null;
  const nextChapter =
    campaign && currentIndex >= 0 && currentIndex < campaign.chapters.length - 1
      ? campaign.chapters[currentIndex + 1]
      : null;

  const heroMedia = isTale ? tale!.heroMedia : chapter!.heroMedia;
  const hasHeroMedia = Boolean(heroMedia);
  const displayTitle = isTale ? tale!.title : chapter!.title;

  const isLaeylaTaleBody = isTale && tale!.body === "laeyla";
  const isCampaignNarrativeOnly =
    !isTale && chapter!.narrativeOnly === true;

  const backHref = isTale ? "/contos" : `/azu/campaigns/${campaign!.slug}`;
  const backLabel = isTale ? "Contos" : campaign!.title;

  return (
    <div className="min-h-screen relative narrative-page-shell">
      <div
        className="noise-overlay fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")',
          mixBlendMode: "multiply",
          opacity: 0.015,
        }}
      />

      <Navbar overHero={hasHeroMedia} />

      {heroMedia ? (
        <HeroMediaDisplay
          heroMedia={heroMedia}
          altTitle={displayTitle}
          objectPosition={
            isTale ? tale!.heroObjectPosition : chapter!.heroObjectPosition
          }
        />
      ) : null}

      <header
        className={`max-w-3xl mx-auto px-6 pb-4 relative z-10 ${
          hasHeroMedia
            ? "-mt-[clamp(5.25rem,15vw,9.25rem)] pt-1 sm:pt-0"
            : "pt-8"
        }`}
      >
        <Link
          href={backHref}
          className={`inline-flex items-center gap-2 group ${
            hasHeroMedia ? "mb-6" : "mb-10"
          }`}
          style={{ color: "var(--link-color)" }}
        >
          <span style={{ color: "var(--accent-gold)" }} className="text-sm pt-[3px] transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span
            className="text-sm"
            style={{ fontFamily: "var(--font-heading)", color: "var(--accent-gold)" }}
          >
            {backLabel}
          </span>
        </Link>

        <div className="text-center mb-4">
          <span
            className="text-xs small-caps tracking-[0.15em] mb-4 inline-block"
            style={{ color: "var(--accent-gold)" }}
          >
            ☽ Manuscrito Azü
          </span>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            }}
          >
            {displayTitle}
          </h1>
        </div>

        {isLaeylaTaleBody ? (
          <blockquote className="text-center mb-8 max-w-xl mx-auto">
            <p
              className="italic text-lg leading-relaxed"
              style={{ color: "var(--secondary-ink)" }}
            >
              — Apenas <strong style={{ color: "var(--accent-gold)" }}>Läyla</strong>.
              — Retrucou, indiferente.
            </p>
          </blockquote>
        ) : isTale ? (
          tale!.epigraph ? (
            <blockquote className="text-center mb-8 max-w-xl mx-auto">
              <p
                className="italic text-lg leading-relaxed"
                style={{ color: "var(--secondary-ink)" }}
              >
                {tale!.epigraph}
              </p>
            </blockquote>
          ) : null
        ) : isCampaignNarrativeOnly ? null : (
          <blockquote className="text-center mb-8 max-w-xl mx-auto">
            <p
              className="italic text-lg leading-relaxed"
              style={{ color: "var(--secondary-ink)" }}
            >
              &ldquo;Onde a luz do chão se apaga, o que resta é a memória daquilo
              que nunca pediu para ser lembrado.&rdquo;
            </p>
            <footer
              className="mt-3 text-xs small-caps tracking-[0.12em]"
              style={{ color: "var(--secondary-ink)", opacity: 0.7 }}
            >
              — Fragmento do Códice de Valerius, Terceira Era
            </footer>
          </blockquote>
        )}

        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs mb-4"
          style={{ color: "var(--secondary-ink)" }}
        >
          {isTale ? (
            <>
              <span className="small-caps tracking-[0.1em]">✦ Conto</span>
              {tale!.worldLabel ? (
                <span className="small-caps tracking-[0.1em]">
                  ✧ Mundo: {tale!.worldLabel}
                </span>
              ) : null}
            </>
          ) : (
            <>
              <span className="small-caps tracking-[0.1em]">
                ✦ Transcrição da Mesa
              </span>
              <span className="small-caps tracking-[0.1em]">
                ✧ Campanha: {campaign!.title}
              </span>
            </>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {(isTale
            ? tale!.tags
            : chapter!.tags ?? [
                "Fantasia Alta",
                "Prólogo",
                "Mundo de Azü",
              ]
          ).map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-sm"
              style={{
                border: "1px solid var(--border)",
                color: "var(--secondary-ink)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <Divider symbol="✦" compact />

      <div className="max-w-5xl mx-auto px-6 pb-16 relative">
        {isLaeylaTaleBody ? (
          <>
            <NarrativeAppendix
              title="Apêndice"
              openButtonAriaLabel="Abrir tomos do conto"
            >
              <AboutTaleCard tale={tale!} />
            </NarrativeAppendix>
            <div className="narrative-chapter-prose">
            <div className="max-w-3xl mx-auto mb-16">
              <LaeylaNarrativeBody />
            </div>
            <section className="lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,15rem)] xl:grid-cols-[minmax(0,1fr)_18rem] lg:gap-x-10 xl:gap-x-12 lg:items-start">
              <div className="order-1 flex min-w-0 w-full justify-center lg:justify-start">
                <div className="flex max-w-3xl flex-col items-center text-center">
                  <Divider symbol="✦" compact />
                  <p
                    className="text-sm italic"
                    style={{ color: "var(--secondary-ink)" }}
                  >
                    Trecho arquivado nos tomos deste conto — a jornada de Läyla
                    continua além destas páginas.
                  </p>
                </div>
              </div>
              <div className="order-2 hidden lg:block">
                <SectionAside alignBottom>
                  <AboutTaleCard tale={tale!} />
                </SectionAside>
              </div>
            </section>
            </div>
          </>
        ) : isCampaignNarrativeOnly ? (
          <div className="narrative-chapter-prose">
            <div className="max-w-3xl mx-auto mb-16">
              {chapter!.slug === "prologo-ii-calculo-das-sombras" ? (
                <CalculoDasSombrasBody />
              ) : null}
            </div>
          </div>
        ) : isTale ? null : (
          <>
        {!isTale && campaign ? (
          <NarrativeAppendix
            title="Apêndice"
            panelEyebrow="Tomos da crónica"
            openButtonAriaLabel="Abrir tomos da crónica"
          >
            <LoreNoteCard />
            <MappedArtifactCard />
            <AboutFulanoCard showAppendixNavIcon />
            <AboutCampaignCard campaign={campaign} />
          </NarrativeAppendix>
        ) : null}
        <div className="narrative-chapter-prose">
        {/* Seção 1 — Nota de Lore (some ao fim deste bloco) */}
        <section className={narrativeSectionClassName()}>
          <div className="min-w-0 drop-cap order-1">
            <p>
              Uma escuridão irregular e amorfa, pesada, alargava-se sobre campo
              aberto.
              O absoluto silêncio aos poucos ia dando lugar a uma respiração
              ofegante que se aproximava.
              A passos apressados, movia-se sob uma capa escura, um vulto; nada
              além de um borrão em meio a sombras.
            </p>
            <p>
              Se havia luz, era de fonte única — nascida do próprio chão.
            </p>
            <p>
              Veios finos, um verde-fantasma mesclado a um ciano quase branco,
              serpenteavam sob a relva e a pedra, lentamente pulsando em batidas
              de luz fria que desenhavam o mundo por instantes e o engoliam no
              segundo posterior.
            </p>
            <p>Ao alcançar uma estrutura de pedra. Parou.</p>
            <p>
              Num único rasgo de céu, a Lua cheia rompeu as nuvens; por um
              fôlego, viu-se a silhueta arqueada, a busca de ar no fundo do
              peito, o cansaço colado aos ossos.
              Junto ao peito, um volume: pergaminhos atados às pressas.
              Segurava-os com força desesperada, como quem protege uma criança de
              um predador feroz.
            </p>
            <p>Do manto, buscou algo. Um espelho.
              Pequeno, de feitura refinada — porém trincado como teia.
            </p>
          </div>
          <div className="order-2 hidden lg:block lg:order-2">
            <SectionAside>
              <LoreNoteCard />
            </SectionAside>
          </div>
        </section>

        {/* Seção 2 — Artefato Mapeado */}
        <section className={narrativeSectionClassName()}>
          <div className="min-w-0 order-1">
            <Divider symbol="✧" compact />

            <p>
              Ergueu-o por sobre o ombro para ver o que o escuro guardava atrás.
              A imagem se fez ver um instante depois: duas das folhas de seus
              próprios pergaminhos, flutuando sobre a grama. E os veios de luz
              que antes respiravam no chão estavam, no reflexo do espelho, mortos.
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src="/assets/illustrations/ryan-smith-highresscreenshot00001.jpg"
                  alt="Uma estrutura de pedra antiga erguida sob luz esverdeada"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption
                className="mt-3 text-center text-xs italic"
                style={{ color: "var(--secondary-ink)", opacity: 0.7 }}
              >
                A estrutura de pedra na zona de convergência — gravura anônima.
              </figcaption>
            </figure>
          </div>
          <div className="order-2 hidden lg:block">
            <SectionAside>
              <MappedArtifactCard />
            </SectionAside>
          </div>
        </section>

        {/* Seção 3 — Sobre Fulano */}
        <section className={narrativeSectionClassName()}>
          <div className="min-w-0 order-1">
            <p>Um calafrio. Em imediato, pânico.
              As mãos trêmulas tatearam até encontrar uma fresta entre as rochas.
            Enfiou os pergaminhos ali — exceto dois.</p>
            <p>
              Tomou o pouco de fôlego que restava e se preparou para a contínua
              fuga.
            </p>
            <p>
              Outra vez pôs-se a correr, agora em direção à uma floresta próxima,
              carregando consigo a escuridão que parecia acompanhá-lo.
            </p>
            <p>
              De súbito, de forma a aparentar tornarem-se em matéria, sombras
              ergueram-se do próprio chão. O ar dobrou, como tecido puxado de
              dentro para fora; bordas de pedras entortaram para dentro de si e a
              terra reagia como se houvesse peso colossal sobre si; o capim
              inclinou contra a própria inclinação. Uma película furta-cor, fina
              como óleo sobre água, lampejou no contorno do mundo e sumiu,
              deixando para trás um cheiro leve de ferro frio.
            </p>
            <p>O pulso da luz serpenteante vacilou. Uma vez. Duas.
            Uma lufada de ar frio.
            E então—</p>
            <p>A floresta afundou em silêncio absoluto.
            Os veios se apagaram.</p>
            <p
              className="italic text-center text-lg mt-12"
              style={{ color: "var(--secondary-ink)" }}
            >
              E, a escuridão, restou.
            </p>
          </div>
          <div className="order-2 hidden lg:block">
            <SectionAside>
              <AboutFulanoCard />
            </SectionAside>
          </div>
        </section>

        {/* Seção 4 — Sobre a Campanha + navegação em largura total */}
        <section className={narrativeSectionClassName("end")}>
          <div className="min-w-0 order-1">
            <Divider symbol="✦" compact />
            <p
              className="text-sm italic text-center"
              style={{ color: "var(--secondary-ink)" }}
            >
              Trecho arquivado para os tomos desta campanha — outras vozes
              seguirão na sequência da crônica.
            </p>
          </div>
          <div className="order-2 hidden lg:block">
            <SectionAside alignBottom>
              <AboutCampaignCard campaign={campaign!} />
            </SectionAside>
          </div>
        </section>
        </div>
          </>
        )}

        <nav className="mt-4 grid min-w-0 grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
          {isTale ? (
            <>
              <Link href="/contos" className="group flex min-h-0 min-w-0">
                <div
                  className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md border px-2 py-2 shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 group-hover:-translate-y-0.5 group-hover:shadow-md before:absolute before:left-0 before:top-0 before:h-0 before:w-1 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="mb-1 flex items-center gap-1 sm:mb-1.5 sm:gap-1.5">
                    <ChevronLeft
                      className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                      style={{ color: "var(--accent-gold)" }}
                      strokeWidth={1.75}
                    />
                    <span
                      className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                      style={{ color: "var(--secondary-ink)" }}
                    >
                      Voltar
                    </span>
                  </div>
                  <p
                    className="mt-auto text-xs leading-snug sm:text-sm"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--foreground)",
                      marginBottom: 0,
                    }}
                  >
                    Contos da Biblioteca
                  </p>
                </div>
              </Link>
              <div
                className="flex h-full min-h-0 min-w-0 flex-col rounded-md border px-2 py-2 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                  opacity: 0.6,
                }}
              >
                <div className="mb-1 flex items-center justify-end gap-1 sm:mb-1.5 sm:gap-1.5">
                  <span
                    className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                    style={{ color: "var(--secondary-ink)" }}
                  >
                    Fim
                  </span>
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                    style={{ color: "var(--secondary-ink)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <p
                  className="mt-auto text-right text-xs italic leading-snug sm:text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--secondary-ink)",
                    marginBottom: 0,
                  }}
                >
                  Este conto encerra aqui.
                </p>
              </div>
            </>
          ) : prevChapter ? (
            <Link
              href={`/azu/campaigns/${campaign!.slug}/${prevChapter.slug}`}
              className="group flex min-h-0 min-w-0"
            >
              <div
                className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md border px-2 py-2 shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 group-hover:-translate-y-0.5 group-hover:shadow-md before:absolute before:left-0 before:top-0 before:h-0 before:w-1 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-1 flex items-center gap-1 sm:mb-1.5 sm:gap-1.5">
                  <ChevronLeft
                    className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                    style={{ color: "var(--accent-gold)" }}
                    strokeWidth={1.75}
                  />
                  <span
                    className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                    style={{ color: "var(--secondary-ink)" }}
                  >
                    Anterior
                  </span>
                </div>
                <p
                  className="mt-auto line-clamp-3 text-xs leading-snug sm:text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                    marginBottom: 0,
                  }}
                >
                  {prevChapter.title}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href={`/azu/campaigns/${campaign!.slug}`}
              className="group flex min-h-0 min-w-0"
            >
              <div
                className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md border px-2 py-2 shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 group-hover:-translate-y-0.5 group-hover:shadow-md before:absolute before:left-0 before:top-0 before:h-0 before:w-1 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-1 flex items-center gap-1 sm:mb-1.5 sm:gap-1.5">
                  <ChevronLeft
                    className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                    style={{ color: "var(--accent-gold)" }}
                    strokeWidth={1.75}
                  />
                  <span
                    className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                    style={{ color: "var(--secondary-ink)" }}
                  >
                    Voltar
                  </span>
                </div>
                <p
                  className="mt-auto line-clamp-3 text-xs leading-snug sm:text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                    marginBottom: 0,
                  }}
                >
                  {campaign!.title}
                </p>
              </div>
            </Link>
          )}

          {!isTale && nextChapter ? (
            <Link
              href={`/azu/campaigns/${campaign!.slug}/${nextChapter.slug}`}
              className="group flex min-h-0 min-w-0"
            >
              <div
                className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-md border px-2 py-2 text-right shadow-none translate-y-0 transition duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 group-hover:-translate-y-0.5 group-hover:shadow-md before:absolute before:left-0 before:top-0 before:h-0 before:w-1 before:bg-[var(--accent-gold)] before:transition-all before:duration-300 before:ease-out group-hover:before:h-full"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="mb-1 flex items-center justify-end gap-1 sm:mb-1.5 sm:gap-1.5">
                  <span
                    className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                    style={{ color: "var(--secondary-ink)" }}
                  >
                    Próximo
                  </span>
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                    style={{ color: "var(--accent-gold)" }}
                    strokeWidth={1.75}
                  />
                </div>
                <p
                  className="mt-auto line-clamp-3 text-xs leading-snug sm:text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--foreground)",
                    marginBottom: 0,
                  }}
                >
                  {nextChapter.title}
                </p>
              </div>
            </Link>
          ) : !isTale ? (
            <div
              className="flex h-full min-h-0 min-w-0 flex-col rounded-md border px-2 py-2 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
                opacity: 0.6,
              }}
            >
              <div className="mb-1 flex items-center justify-end gap-1 sm:mb-1.5 sm:gap-1.5">
                <span
                  className="text-[0.65rem] small-caps tracking-[0.1em] sm:text-xs"
                  style={{ color: "var(--secondary-ink)" }}
                >
                  Próximo
                </span>
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 sm:h-[14px] sm:w-[14px]"
                  style={{ color: "var(--secondary-ink)" }}
                  strokeWidth={1.75}
                />
              </div>
              <p
                className="mt-auto text-right text-xs italic leading-snug sm:text-sm"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--secondary-ink)",
                  marginBottom: 0,
                }}
              >
                Em breve…
              </p>
            </div>
          ) : null}
        </nav>
      </div>

      <Footer />
    </div>
  );
}
