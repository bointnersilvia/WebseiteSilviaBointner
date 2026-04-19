"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CranioSacralPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Cranio Sacrale Impulsregulation
        </h1>
        
        <div className="mt-8 space-y-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src="/3.1._foto_cranio_sacrale.jpg"
                    alt="Cranio Sacrale Behandlung"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    Körperliche Beschwerden und mentale Herausforderungen hängen oftmals sehr eng zusammen. Damit sie nachhaltig und dauerhaft gelöst werden, gehen wir beider Ursachen auf ganzheitlicher Ebene auf den Grund.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Im Cranio Sacralen System finden sich Blockaden, Verhärtungen und Spannungen. Sanfte und achtsame Berührungen mit spezifischen Techniken führen zu einer tiefen Entspannung, lösen Blockaden und die Energie kommt wieder ins Fließen.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Ursachen für diese Blockaden und Spannungen können ganz unterschiedliche Ursache haben zB durch Unfälle, Verletzungen und Erkrankungen oder auch durch traumatische Erlebnisse, Geburt oder psychische Belastungen. Ignorieren wir die Warnsignale des Körpers, kommt es zu immer stärkeren Beschwerden oder Krankheiten, durch diese wir zum Hinsehen gezwungen werden.
              </p>
              <p className="text-muted-foreground">
                In den letzten Jahren sind viele verschiedene Richtungen und Schulen der Cranio Sacralen Lehre entstanden. Die Cranio Sacrale Impulsregulation (CSIR) wurde von Dr. Joelle Aimée Toulouse, die als Pionierin im Bereich Cranio Sacraler Anwendungen gilt, entwickelt. Sie hat die Cranio Sacrale Osteopathie über England und Frankreich im Jahr 1987 nach Österreich gebracht und diese gemeinsam mit Erich Kubisch weiterentwickelt und etabliert. Die CSIR ist eine sehr sanfte und effektive Methode und wird durch die energetische Komponente der traditionellen chinesischen Medizin (TCM) bereichert.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Entstehung der Cranio Sacralen Behandlung</h2>
              <p className="text-muted-foreground">
                Im Jahre 1874 trat der amerikanische Arzt Andrew Taylor Still (1828–1917) erstmalig mit einem neuen, ganzheitlichen medizinischen Konzept an die Öffentlichkeit: der „Osteopathie". William Garner Sutherland (1873–1954) studierte bei Dr. Still und erweiterte das osteopathische Konzept auch auf den Bereich des Schädels.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Wann ist eine Cranio Sacrale Anwendung hilfreich?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Chronische und akute Beschwerden</li>
                <li>Kopfschmerzen und Migräne</li>
                <li>Verspannungen im Rücken- und Nackenbereich</li>
                <li>Kiefergelenksbeschwerden/Zahn- und Kieferregulierungen</li>
                <li>Wachstums- und Zahnungsbeschwerden bei Kindern</li>
                <li>Verarbeitung von traumatischen Erlebnissen</li>
                <li>Förderung der Heilungsprozesse z.B. nach Unfällen</li>
                <li>Stressbewältigung, innere Balance, Erschöpfungszustände</li>
                <li>Schlafprobleme</li>
                <li>Schwangerschaftsbegleitung</li>
                <li>u.v.m.</li>
              </ul>
              <p className="text-muted-foreground">
                Eine Cranio Sacrale Anwendung unterstützt das allgemeine Wohlbefinden und eignet sich für Menschen aller Altersgruppen.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Eine Kostenübernahme ist bei privaten Krankenversicherungen oder Zusatzversicherungen oft möglich. Bitte informieren Sie sich vorab bei Ihrer Versicherung.
                </p>
                <p>
                  Manchmal kommt etwas dazwischen: Sollte ein vereinbarter Termin nicht eingehalten werden können, bitte diesen bis 24 Stunden davor kostenfrei stornieren. Später abgesagte oder nicht wahrgenommene Termine müssen in Rechnung gestellt werden.
                </p>
              </div>
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