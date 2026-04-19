"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function ImpressumPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 text-center">
          Impressum
        </h1>
        
        <div className="mt-8">
          <Card className="hover-lift">
            <CardContent className="pt-6 space-y-6">
              <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <p>Silvia Bointner</p>
                <p>Stetteldorf am Wagram</p>
                <p>Österreich</p>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                <p>Telefon: +43 664 56 89 388</p>
                <p>E-Mail: kontakt@silviabointner.at</p>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Energetikerin</p>
                <p>Verliehen in: Österreich</p>
              </section>

              <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Online-Streitbeilegung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}