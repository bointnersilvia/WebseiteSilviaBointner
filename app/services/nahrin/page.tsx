"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function NahrinPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Nahrin – gesund -schön – aktiv
        </h1>
        
        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="/NahrinProdukte.jpg"
                    alt="Nahrin Produkte"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    Seit 2009 bin ich Partnerin bei dem österreichischen Unternehmen, das 1954 in der Schweiz gegründet wurde. Das Motto: gesund-schön-aktiv vereint traditionelles Wissen mit innovativen Produkten.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Nahrin im Überblick</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Privat geführtes österreichisches Unternehmen mit Schweizer Wurzeln</li>
                <li>Hochwertige Rohstoffe aus selektierten Anbaugebieten</li>
                <li>Qualitätsbewusste Lieferanten</li>
                <li>Persönliche Beratung mit Einfühlungsvermögen</li>
                <li>Bestes Service durch regionale Nahrin-Partner/innen</li>
              </ul>
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