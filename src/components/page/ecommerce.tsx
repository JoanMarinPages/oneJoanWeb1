
"use client";

import * as React from "react";
import Image from "next/image";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Section } from "./section";

const products = [
  {
    name: "Zapatilla Nébula",
    price: "120.00€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#3b82f6", "#10b981", "#ef4444"],
  },
  {
    name: "Zapatilla Corredor",
    price: "95.50€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#f97316", "#8b5cf6", "#ec4899"],
  },
  {
    name: "Estilo Urbano Max",
    price: "150.00€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#14b8a6", "#6366f1", "#d946ef"],
  },
  {
    name: "Clásica de Piel",
    price: "110.75€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#6b7280", "#000000", "#ffffff"],
  },
  {
    name: "Zapatilla Vortex",
    price: "135.00€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#84cc16", "#22d3ee", "#facc15"],
  },
  {
    name: "Aventura Trail",
    price: "145.25€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#f59e0b", "#16a34a", "#4f46e5"],
  },
  // Duplicamos para el efecto de scroll infinito
   {
    name: "Zapatilla Nébula",
    price: "120.00€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#3b82f6", "#10b981", "#ef4444"],
  },
  {
    name: "Zapatilla Corredor",
    price: "95.50€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#f97316", "#8b5cf6", "#ec4899"],
  },
  {
    name: "Estilo Urbano Max",
    price: "150.00€",
    image: "https://placehold.co/300x300.png",
    hint: "shoe sneaker",
    colors: ["#14b8a6", "#6366f1", "#d946ef"],
  },
];

export function Ecommerce() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const cartProduct = products[0];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCartOpen((prev) => !prev);
    }, 7000); // Se abre y cierra cada 7 segundos

    // Abre el carrito la primera vez
    setTimeout(() => setCartOpen(true), 1000);

    return () => clearInterval(interval);
  }, []);

  const title = (
    <>
      <span className="animated-gradient-text">E-commerce Dinámico</span> y Moderno
    </>
  );

  const description = "Desde catálogos animados hasta carritos de compra interactivos, creo experiencias de compra online que convierten visitantes en clientes.";

  return (
    <Section id="ecommerce" title={title} description={description}>
      <div className="relative h-[600px] w-full overflow-hidden rounded-2xl bg-grid-pattern fade-in-up">
        <div className="absolute inset-0 flex p-8 gap-8">
          {/* Columna de productos con scroll */}
          <div className="h-full w-1/3 overflow-hidden">
            <div className="animate-scroll-y">
              <div className="space-y-4">
                {products.map((product, index) => (
                  <Card key={index} className="p-4 flex items-center gap-4 bg-card/90 backdrop-blur-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-lg"
                      data-ai-hint={product.hint}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-muted-foreground">{product.price}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Área principal (puede contener un producto destacado, etc.) */}
          <div className="w-2/3 h-full">
             <Card className="h-full w-full flex items-center justify-center p-8 bg-card/90 backdrop-blur-sm">
                <div className="text-center">
                    <ShoppingCart className="mx-auto h-24 w-24 text-primary/20" />
                    <h3 className="mt-4 text-2xl font-bold font-headline">Tu Próxima Tienda Online</h3>
                    <p className="mt-2 text-muted-foreground">Diseño elegante, animaciones fluidas y una experiencia de usuario inolvidable.</p>
                </div>
            </Card>
          </div>
        </div>

        {/* Carrito lateral animado */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-96 bg-card/95 backdrop-blur-lg border-l border-border shadow-2xl transform transition-transform duration-700 ease-in-out",
            cartOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold font-headline flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-primary" />
                Tu Carrito
              </h3>
              <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {/* Producto en el carrito */}
              <div className="flex gap-4">
                <Image
                  src={cartProduct.image}
                  alt={cartProduct.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                  data-ai-hint={cartProduct.hint}
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{cartProduct.name}</h4>
                  <p className="text-muted-foreground text-sm">Talla: 42 - Color: Azul</p>
                  <p className="font-bold mt-1">{cartProduct.price}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 border rounded-md p-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6"><Minus /></Button>
                      <span className="font-bold text-sm">1</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><Plus /></Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-8 w-8">
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </div>
               <Badge className="w-full justify-center py-1">¡Solo quedan 3 en stock!</Badge>
            </div>
            <div className="p-6 border-t mt-auto space-y-4">
                <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>{cartProduct.price}</span>
                </div>
                 <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Envío</span>
                    <span>Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-4">
                    <span>Total</span>
                    <span>{cartProduct.price}</span>
                </div>
              <Button size="lg" className="w-full">Finalizar Compra</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
