"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function RaindropPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Raindrop Energetik
        </h1>
        
        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
                    alt="Raindrop Energetik"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    Diese einzigartige, sanfte und äußerst wirkungsvolle Anwendung mit 100 % ätherischen Ölen mit dem Young Living Feelings-Set wird am Rücken aufgetragen und harmonisiert.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Wann ist eine Raindrop Energetik Anwendung hilfreich?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Verspannungen lösen</li>
                <li>Zum Entspannen – einfach mal loslassen</li>
                <li>Wirbelsäulenprobleme</li>
                <li>Kräftigung des Stütz- und Bewegungsapparats</li>
                <li>Immunsystem stärken</li>
                <li>Blockaden lösen</li>
              </ul>
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