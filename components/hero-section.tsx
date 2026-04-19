"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Droplets, Sparkles, Phone, Sprout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Cranio Sacrale Impulsregulation",
    description: "Sanfte Harmonisierung des Körpers",
    icon: Sparkles,
    href: "/services/cranio-sacral",
    image: "cranio.png"
  },
  {
    title: "Rota",
    description: "Nahrung fürs Gehirn",
    icon: Sparkles,
    href: "/services/rota",
    image: "Rota1.jpg"
  },
  {
    title: "Raindrop Energetik",
    description: "Anwendung mit ätherischen Ölen",
    icon: Droplets,
    href: "/services/raindrop",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "IL-DO Körperkerzen",
    description: "Schamanische Tradition",
    icon: Sparkles,
    href: "/services/koerperkerzen",
    image: "Körperkerzen1.jpg"
  },
  {
    title: "Nahrin Produkte",
    description: "gesund – schön – aktiv",
    icon: Leaf,
    href: "/services/nahrin",
    image: "NahrinProdukte.jpg"
  },
  {
    title: "Lebe Natur",
    description: "Balance des Körpers aufrecht erhalten",
    icon: Sprout,
    href: "/services/lebe-natur",
    image: "image.png"
  }
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/8 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="container relative z-10">
        {/* Logo and Welcome */}
        <div className="text-center mb-12 fade-in">
          <div className="mb-8 flex justify-center">
            <Image
              src="/1.1._logo_zu_startseite_(1).png"
              alt="Silvia Bointner Logo"
              width={200}
              height={200}
              className="w-auto h-32 object-contain"
              priority
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
            Take a moment, just for yourself
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Schön, dass du hier bist!
          </h1>
        </div>

        {/* Introductory Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Entdecke deinen Weg zu innerer Balance und körperlicher Harmonie durch
            bewährte Heilmethoden und natürliche Behandlungen.
          </p>

          <blockquote className="border-l-4 border-primary/30 pl-6 py-4 bg-primary/5 rounded-r-lg">
            <p className="text-lg md:text-xl text-foreground italic mb-2">
              „Ein gesundes Außen beginnt mit einem gesunden Innen."
            </p>
            <footer className="text-sm text-muted-foreground">
              ~ Robert Urich
            </footer>
          </blockquote>
        </div>

        {/* Services Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Card className="p-10 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für deinen Weg zu mehr Wohlbefinden?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Vereinbare einen Termin und lass uns gemeinsam deinen individuellen Behandlungsplan entwickeln!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Termin vereinbaren
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="tel:+436645689388"
                  className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Tel.: +43 664 56 89 388
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Zertifizierte Behandlungen
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Über 15 Jahre Erfahrung
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Ganzheitlicher Ansatz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}