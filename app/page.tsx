import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Phone, MapPin } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
                  <Heart className="w-3 h-3" />
                  Über mich
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Deine Gesundheit ist meine Berufung
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Aufgewachsen auf einem Bauernhof im ländlichen Stetteldorf am Wagram,
                  fasziniert mich seit meiner Kindheit das Wunder Mensch. Mit über 15 Jahren
                  Erfahrung begleite ich dich auf deinem Weg zu ganzheitlichem Wohlbefinden.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Mehr über mich erfahren
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="About1.jpg"
                    alt="Silvia Bointner"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für deinen Weg zu mehr Wohlbefinden?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vereinbare einen Termin und lass uns gemeinsam deinen individuellen
              Behandlungsplan entwickeln.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Telefonisch</h3>
                <a href="tel:+436645689388" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +43 664 56 89 388
                </a>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Persönlich</h3>
                <p className="text-sm text-muted-foreground">Vor Ort Beratung</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Standort</h3>
                <p className="text-sm text-muted-foreground">Stetteldorf am Wagram</p>
              </Card>
            </div>

            <Link href="/contact">
              <Button size="lg" className="group">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}