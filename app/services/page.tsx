import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Flame, Sparkles, Leaf, Sprout, ArrowRight, Clock, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cranio Sacrale Impulsregulation",
    description: "Eine sanfte und effektive Methode zur Harmonisierung des Körpers",
    longDescription: "Körperliche Beschwerden und mentale Herausforderungen hängen oftmals sehr eng zusammen. Ganzheitliche Behandlung für nachhaltige Heilung.",
    icon: Brain,
    href: "/services/cranio-sacral",
    image: "cranio.png",
    duration: "60-90 Min",
    featured: true
  },
  {
    title: "Rota",
    description: "ROTAtion – Nahrung fürs Gehirn",
    longDescription: "Durch einfache Übungen, bei welchen man um die eigene Körperachse rotiert, kann die Körpergrundspannung reguliert werden.",
    icon: Sparkles,
    href: "/services/rota",
    image: "Rota1.jpg",
    duration: "45-60 Min"
  },
  {
    title: "Raindrop Energetik",
    description: "Einzigartige Anwendung mit ätherischen Ölen",
    longDescription: "Sanfte und wirkungsvolle Anwendung mit 100% ätherischen Ölen für Harmonisierung von Körper und Geist.",
    icon: Heart,
    href: "/services/raindrop",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600",
    duration: "75-90 Min"
  },
  {
    title: "IL-DO Körperkerzen",
    description: "Natürliche Anwendungstechnik aus schamanischer Tradition",
    longDescription: "Diese natürliche Anwendungstechnik harmonisiert Körper, Geist und Seele durch das Zusammenwirken mehrerer Faktoren.",
    icon: Flame,
    href: "/services/koerperkerzen",
    image: "Körperkerzen1.jpg",
    duration: "60 Min"
  },
  {
    title: "Nahrin – gesund -schön – aktiv",
    description: "Hochwertige Naturprodukte für Ihr Wohlbefinden",
    longDescription: "Österreichisches Unternehmen mit Schweizer Wurzeln. Hochwertige Naturprodukte für ganzheitliches Wohlbefinden.",
    icon: Leaf,
    href: "/services/nahrin",
    image: "NahrinProdukte.jpg",
    duration: "Beratung"
  },
  {
    title: "Lebe Natur",
    description: "Balance des Körpers wiederherstellen und aufrecht erhalten",
    longDescription: "Ganzheitliche Sichtweise in Resonanz mit der Natur. Produkte zum Schutz und Erhalt von Ursprungsstrukturen.",
    icon: Sprout,
    href: "/services/lebe-natur",
    image: "image.png",
    duration: "Beratung"
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Meine Angebote
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ganzheitliche Behandlungsmethoden
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie meine bewährten Heilmethoden und natürlichen Produkte 
            für Ihr körperliches und seelisches Wohlbefinden.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.href} 
                href={service.href} 
                className={`group ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={200}
                      className="w-full h-48 object-cover  transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Beliebt
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.longDescription}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nicht sicher, welche Behandlung für dich geeignet ist?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gerne berate ich dich persönlich und finde gemeinsam mit dir
                die passende Behandlungsmethode für deine individuellen Bedürfnisse.
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Kostenlose Beratung vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}