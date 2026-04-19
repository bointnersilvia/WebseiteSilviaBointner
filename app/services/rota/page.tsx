"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RotaPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          ROTAtion – Nahrung fürs Gehirn
        </h1>
        
        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="/Rota1.jpg"
                    alt="Rota Prophylaxe"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    Rota kommt von Rotation. Durch einfache Übungen, bei welchen man um die eigene Körperachse rotiert, kann die Körpergrundspannung (Tonus) reguliert werden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Wann ist eine Rota Anwendung hilfreich?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Zentral Koordinationsstörungen</li>
                <li>Frühgeborene, Risikokinder, Schreibabys</li>
                <li>Wahrnehmungsstörungen</li>
                <li>Konzentrations- und Lernstörungen</li>
                <li>Sprach- und Sprechstörungen</li>
                <li>Skoliose und Wirbelsäulenbeschwerden</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Absageregel</h2>
              <p className="text-muted-foreground">
                Sollte ein vereinbarter Termin nicht eingehalten werden können, bitte mindestens 24 Stunden vorher kostenfrei stornieren. Später abgesagte oder nicht wahrgenommene Termine müssen in Rechnung gestellt werden.
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