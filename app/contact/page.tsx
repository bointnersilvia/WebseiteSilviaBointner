"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { CopyToClipboard } from "@/components/copy-to-clipboard";

export default function ContactPage() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container mb-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Kontakt
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Lass uns sprechen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hast du Fragen zu meinen Behandlungen oder möchtest du einen Termin vereinbaren?
            Ich freue mich auf deine Nachricht und berate dich gerne persönlich.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Telefon</h3>
            <CopyToClipboard 
              text="Tel.: +43 664 56 89 388"
              className="text-muted-foreground hover:text-primary transition-colors"
            />
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">E-Mail</h3>
            <CopyToClipboard 
              text="kontakt@silviabointner.at" 
              className="text-muted-foreground hover:text-primary transition-colors"
            />
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Standort</h3>
            <CopyToClipboard 
              text="Stetteldorf am Wagram, Österreich" 
              className="text-muted-foreground hover:text-primary transition-colors"
            />
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Antwortzeit</h3>
                <p className="text-sm text-muted-foreground">
                  Ich antworte in der Regel innerhalb von 24 Stunden auf deine Anfrage.
                  Bei dringenden Anliegen rufe mich gerne direkt an.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h3 className="font-semibold mb-2">Erstberatung</h3>
            <p className="text-sm text-muted-foreground">
              Gerne biete ich dir ein kostenloses Erstgespräch an, um deine Bedürfnisse
              zu besprechen und die passende Behandlung für dich zu finden.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}