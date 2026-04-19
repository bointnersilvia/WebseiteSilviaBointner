"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function DatenschutzPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Datenschutzerklärung
        </h1>
        
        <div className="mt-8">
          <Card className="hover-lift">
            <CardContent className="pt-6 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
                <p>Wenn du uns per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Deine Rechte</h2>
                <p>Du hast jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}