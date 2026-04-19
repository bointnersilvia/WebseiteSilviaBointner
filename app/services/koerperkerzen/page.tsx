"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function KoerperkerzenPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          IL-DO Körperkerzen
        </h1>

        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="/Körperkerzen1.jpg"
                    alt="IL-DO Körperkerzen"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    Die Kraft des Feuers in Kombination mit Kräutern und vielfältigen Farben reinigt und transformiert Blockaden, Spannungen und Entzündungen!

                    <br></br><br></br>Die IL-DO Körperkerzen können bei Menschen jeden Alters angewandt werden und sind auch für Kinder und Tiere sehr zu empfehlen.

                    <br></br><br></br>Ich kombiniere meine Anwendungen mit den Ölen von Young Living, da die Verbindung mit ätherischen Ölen die Wirkung der IL-DO Körperkerzen erhöht. Diese Kombination trägt auch wesentlich zu einer Steigerung des geistigen, seelischen und körperlichen Wohlbefindens bei!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Wann ist eine IL-DO Körperkerzen Anwendung hilfreich?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Blockaden lösen</li>
                <li>Stress abbauen</li>
                <li>Chakren in Einklang bringen</li>
                <li>Aura Reinigung</li>
                <li>Selbstheilungskräfte aktivieren</li>
                <li>Körper, Geist und Seele entspannen</li>
                <li>körperliche Missempfindungen lösen</li>
                <li>Unterstützung z.B. bei Mittelohrentzündung u.v.m.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Anwendung der Körperkerze erlernen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Du möchtest mehr über die IL-DO Körperkerze erfahren (
                <a
                  href="https://www.il-do.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  www.il-do.eu
                </a>
                ) und die Anwendung selbst erlernen! Dann kontaktiere mich gerne!
              </p>
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-lift border-amber-200 bg-amber-50/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Stornierungsbedingungen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manchmal kommt etwas dazwischen: Sollte ein vereinbarter Termin nicht eingehalten werden können, bitte diesen bis 24 Stunden davor kostenfrei stornieren. Später abgesagte oder nicht wahrgenommene Termine müssen in Rechnung gestellt werden.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              WICHTIG: Meine Arbeit ist kein Ersatz für eine medizinische, psychologische, psychotherapeutische oder physiotherapeutische Heilbehandlung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}