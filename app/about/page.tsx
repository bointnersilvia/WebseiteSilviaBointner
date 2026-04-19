"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Calendar, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
            <Heart className="w-4 h-4" />
            Über mich
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Silvia Bointner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Die Gesundheit des Menschen von Geburt bis ins hohe Alter ist meine Berufung.
            Mit Leidenschaft und Erfahrung begleite ich dich auf deinem Weg zu mehr Wohlbefinden.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container">
        <div className="max-w-6xl mx-auto">
          {/* Personal Story */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="About1.jpg"
                  alt="Silvia Bointner"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Jahre Erfahrung</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meine Geschichte</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Aufgewachsen auf einem Bauernhof im ländlichen Stetteldorf am Wagram (Weinviertel),
                  lebe ich noch heute in diesem sehr ruhigen Dorf. Die Verbindung zur Natur und
                  die Ruhe des Landlebens prägen meine Arbeit bis heute.
                </p>
                <p>
                  Neben meinem Interesse für Zahlen faszinierte mich schon seit meiner Kindheit
                  das Wunder Mensch! Diese Faszination führte mich zu meiner heutigen Berufung
                  als Energetikerin und Beraterin.
                </p>
                <p>
                  2009 startete ich als Beraterin bei der Firma Nahrin Vertriebs GmbH – gesund – schön - aktiv.
                  2020 begann ich meine Ausbildungen in der Cranio Sacralen Behandlung und IL-Do Körperkerzen.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Meine Ausbildungen</h4>
                  <ul className="space-y-2 text-base">
                    <li>• 2009 – Beraterin für Produkte von Nahrin Vertriebs GmbH – gesund – schön – aktiv</li>
                    <li>• 2019 – Austesten mittels Kinesiologie, Tensor und Pendel bei Doris Schlögel</li>
                    <li>• 2020 – Il do Körperkerzen Basisseminar, Heidemarie Teuschl, St. Pölten</li>
                    <li>• 2020 – Partnerin Young Living Essential Oils und Il-Do Körperkerzen, St. Pölten</li>
                    <li>• 2020 - Basiskurs für Cranio Sacrale Impulsregulation (SCIR) bei Dr. Joelle Aimée Toulouse, Krems</li>
                    <li>• 2021 – Il do Körperkerzen Folgeseminar, Heidemarie Teuschl, St. Pölten</li>
                    <li>• 2021 - Praxiskurs für CSIR bei Kerstin Fuchsbauer, Krems</li>
                    <li>• 2022 – Seminar Energetische Alltagsbegleiter bei Humanenergetik Heidemarie Teuschl, St. Pölten</li>
                    <li>• 2022 – Partnerin bei Lebe Natur (AQUARIUS Naturprodukte GmbH)</li>
                    <li>• 2022/2023 - Diplomkurs für CSIR (Babys, Kinder, Jugendliche, Schwangerschaft) bei Dr. Joelle Aimée Toulouse, Krems</li>
                    <li>• 2022/2023 – Rota-Prophylaxe bei Julia Gekle, Wien</li>
                    <li>• 2023 - Raindrop Energetik bei Humanenergetik Heidemarie Teuschl, St. Pölten</li>
                    <li>• 2024 – Vertiefungsseminar Il do Körperkerzen II bei Sabine Buchinger, Langenlois</li>
                    <li>• 2024 - Mein Potential in den Füßen – Birgit Schöllbauer (Happy Cranio)</li>
                    <li>• 2024 - Rota Fortbildung zum Thema Autismus Spektrum Störung</li>
                    <li>• 2024 – Rota-Prophylaxe-Anwendung Säuglingskurs bei Julia Gekle, Wien</li>
                    <li>• 2024 – Il-do Trainerausbildung – Ildiko und Gregor Papp, Wien</li>
                    <li>• 2025 – Ausgebildet in der Liebscher & Bracht Schmerztherapie, Bad Homburg (Deutschland)</li>
                    <li>• 2025 Aura I – Ildiko Papp, Wien</li>
                    <li>• 2025/2026 – Cranio Sacrale – Heilende Gespräche mit den inneren Organen – Tanja Thiry, Allentsgschendt</li>
                    <li>• Laufende Fortbildungen bei Nahrin – gesund-schön-aktiv/Lebe Natur - AQUARIUS Naturprodukte GmbH/Rota Prophylaxe usw.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-sm text-muted-foreground">Spezialisierungen</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-sm text-muted-foreground">Standort</div>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="w-full">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">Meine Philosophie</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Ganzheitlicher Ansatz:</strong> Ich betrachte dich als Einheit von Körper, Geist und Seele.
                    Nur wenn alle Bereiche in Balance sind, kannst du wahres Wohlbefinden erreichen.
                  </p>
                  <p>
                    <strong className="text-foreground">Individuelle Betreuung:</strong> Jeder Mensch ist einzigartig.
                    Deshalb entwickle ich für dich ein individuelles Behandlungskonzept,
                    das auf deine spezifischen Bedürfnisse abgestimmt ist.
                  </p>
                  <p>
                    <strong className="text-foreground">Natürliche Heilung:</strong> Ich setze auf bewährte,
                    natürliche Heilmethoden, welche die Selbstheilungskräfte deines Körpers aktivieren
                    und unterstützen.
                  </p>
                  <p>
                    <strong className="text-foreground">Kontinuierliche Weiterbildung:</strong> Die Welt der
                    Naturheilkunde entwickelt sich ständig weiter. Ich bilde mich kontinuierlich fort,
                    um dir immer die besten Behandlungsmethoden anbieten zu können.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}