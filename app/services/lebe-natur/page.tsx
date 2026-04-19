"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LebeNaturPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Lebe Natur
        </h1>

        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Partnerin bei Lebe Natur</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lebe Natur hat es sich zur Aufgabe gemacht mit Hilfe der vielen tollen Produkte die Balance des Körpers wiederherzustellen bzw. aufrecht zu erhalten!
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Das Prinzip basiert auf einer ganzheitlichen Sichtweise und hat das Ziel mit der Natur in Resonanz zu treten. Nicht weil es ein Trend ist, sondern aus Liebe dazu. Daher werden auch Hilfsprojekte gefördert und unterstützt. Der Fokus von Lebe Natur liegt auf dem Schutz und Erhaltung, Förderung und Stärkung von Ursprungsstrukturen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ich kombiniere die Produkte gerne mit den Produkten von{" "}
                <Link href="/services/nahrin" className="text-primary hover:underline font-medium">
                  Nahrin – gesund schön aktiv
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Beratung & Bestellung</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Du möchtest mehr zu den Produkten erfahren und wie du dein Wohlbefinden steigern und deinen Körper unterstützen kannst? Dann kontaktiere mich gerne!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full">
                    Beratung anfragen
                  </Button>
                </Link>
                <a
                  href="https://lebenatur.com/?sPartner=27611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" variant="outline" className="w-full">
                    Produkte direkt bestellen
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Lebe Natur Partner</h3>
              <div className="flex justify-center">
                <a
                  href="https://lebenatur.com/?sPartner=27611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image src="/image.png" alt="Lebe Natur Partner Banner" className="w-[300] h-auto rounded-lg" width={300} height={300} />
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              WICHTIG: Meine Beratung ist kein Ersatz für eine ärztliche Behandlung!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
