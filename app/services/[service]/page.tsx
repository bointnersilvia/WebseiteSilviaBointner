import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = {
  "cranio-sacral": {
    title: "Cranio Sacrale Impulsregulation",
    content: `Körperliche Beschwerden und mentale Herausforderungen hängen oftmals sehr eng zusammen. Damit sie nachhaltig und dauerhaft gelöst werden, gehen wir beider Ursachen auf ganzheitlicher Ebene auf den Grund.`,
    image: "cranio.png"
  },
  "rota": {
    title: "ROTAtion – Nahrung fürs Gehirn",
    content: `Rota kommt von Rotation. Durch einfache Übungen, bei welchen man um die eigene Körperachse rotiert, kann die Körpergrundspannung (Tonus) reguliert werden.`,
    image: "Rota1.jpg"
  },
  "raindrop": {
    title: "Raindrop Energetik",
    content: `Diese einzigartige, sanfte und äußerst wirkungsvolle Anwendung mit 100 % ätherischen Ölen mit dem Young Living Feelings-Set wird am Rücken aufgetragen und harmonisiert.`,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
  },
  "koerperkerzen": {
    title: "IL-DO Körperkerzen",
    content: `Diese natürliche Anwendungstechnik entspringt einem alten schamanischen Heilverfahren. Durch das Zusammenwirken mehrerer Faktoren harmonisieren sie Körper, Geist und Seele.`,
    extraContent: [
      `Die Kraft des Feuers in Kombination mit Kräutern und vielfältigen Farben reinigt und transformiert Blockaden, Spannungen und Entzündungen!`,
      `Die IL-DO Körperkerzen können bei Menschen jeden Alters angewandt werden und sind auch für Kinder und Tiere sehr zu empfehlen.`,
      `Ich kombiniere meine Anwendungen mit den Ölen von Young Living, da die Verbindung mit ätherischen Ölen die Wirkung der IL-DO Körperkerzen erhöht. Diese Kombination trägt auch wesentlich zu einer Steigerung des geistigen, seelischen und körperlichen Wohlbefindens bei!`
    ],
    image: "Körperkerzen1.jpg"
  },
  "nahrin": {
    title: "Nahrin – gesund -schön – aktiv",
    content: `Seit 2009 bin ich Partnerin bei dem österreichischen Unternehmen, das 1954 in der Schweiz gegründet wurde. Das Motto: gesund-schön-aktiv vereint traditionelles Wissen mit innovativen Produkten.`,
    image: "NahrinProdukte.jpg"
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          {service.title}
        </h1>
        
        <div className="mt-8">
          <Card className="hover-lift">
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover hover-scale"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">
                    {service.content}
                  </p>
                  {"extraContent" in service && service.extraContent && (
                    <div className="mt-6 space-y-4">
                      {service.extraContent.map((paragraph) => (
                        <p key={paragraph} className="text-lg text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}