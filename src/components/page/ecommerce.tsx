
"use client";

import * as React from "react";
import Image from "next/image";
import { ShoppingCart, X, Plus, Minus, Trash2, MemoryStick, Cpu, HardDrive, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Section } from "./section";

const allProducts = [
  {
    id: 1,
    name: "QuantumBook Pro",
    category: "Portátil",
    price: "2,499.00€",
    description: "Potencia redefinida con el nuevo chip M4.",
    image: "https://placehold.co/400x300.png",
    hint: "laptop computer",
    colors: ["#808080", "#C0C0C0", "#000000"],
  },
  {
    id: 2,
    name: "AI-Mouse Ergonómico",
    category: "Periférico",
    price: "129.50€",
    description: "Precisión y confort con seguimiento ocular.",
    image: "https://placehold.co/400x300.png",
    hint: "computer mouse",
    colors: ["#f97316", "#8b5cf6", "#ec4899"],
  },
  {
    id: 3,
    name: "Pantalla Holográfica",
    category: "Monitor",
    price: "1,800.00€",
    description: "Visualización 3D inmersiva para creativos.",
    image: "https://placehold.co/400x300.png",
    hint: "monitor screen",
    colors: ["#14b8a6", "#6366f1", "#d946ef"],
  },
  {
    id: 4,
    name: "Teclado Mecánico Aura",
    category: "Periférico",
    price: "210.75€",
    description: "Switches personalizables y RGB inmersivo.",
    image: "https://placehold.co/400x300.png",
    hint: "keyboard computer",
    colors: ["#6b7280", "#000000", "#ffffff"],
  },
  {
    id: 5,
    name: "QuantumBook Air",
    category: "Portátil",
    price: "1,599.00€",
    description: "Portabilidad y rendimiento sin concesiones.",
    image: "https://placehold.co/400x300.png",
    hint: "silver laptop",
    colors: ["#C0C0C0", "#F0E68C"],
  },
   {
    id: 6,
    name: "Monitor UltraWide 4K",
    category: "Monitor",
    price: "950.00€",
    description: "Productividad y color sin límites.",
    image: "https://placehold.co/400x300.png",
    hint: "ultrawide monitor",
    colors: ["#000000", "#ffffff"],
  },
];

const featuredProduct = allProducts[0];
const cartProduct = allProducts[1];
const categories = ["Todos", "Portátil", "Periférico", "Monitor"];

export function Ecommerce() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [activeConfig, setActiveConfig] = React.useState({ ram: "16GB", storage: "1TB", cpu: "M4 Pro" });
  const [activeFilter, setActiveFilter] = React.useState("Todos");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCartOpen((prev) => !prev);
    }, 7000);
    setTimeout(() => setCartOpen(true), 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = React.useMemo(() => {
    if (activeFilter === "Todos") return allProducts;
    return allProducts.filter(p => p.category === activeFilter);
  }, [activeFilter]);
  
  const displayProducts = [...filteredProducts, ...filteredProducts, ...filteredProducts];

  const title = (
    <>
      <span className="text-primary">E-commerce Dinámico</span> y Moderno
    </>
  );

  const description = "Desde catálogos animados hasta carritos de compra interactivos, creo experiencias de compra online que convierten visitantes en clientes.";

  return (
    <Section 
      id="ecommerce" 
      title={title} 
      description={description}
      backgroundVideoUrl="/assets/ondesVideo/social_yow_one_httpss.mj.runHb7pva_IXRU_--ar_12869_--video_1_d1590073-1217-4c55-ab72-085a3085ba55_0.mp4"
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-card/80 backdrop-blur-md border border-white/20 shadow-xl shadow-primary/10">
        <div className="absolute inset-0 flex flex-col md:flex-row p-4 md:p-8 gap-8">
          
          <div className="h-full w-full md:w-[35%] flex flex-col">
            <div className="flex-shrink-0 mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={activeFilter === category ? 'default' : 'outline'}
                            size="sm"
                            className={cn(
                                "w-full text-xs h-8 backdrop-blur-sm transition-colors",
                                activeFilter !== category && "bg-white/80 border-white/30 text-black hover:bg-white/90"
                            )}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="h-[400px] md:h-full overflow-hidden flex-grow">
                <div className="animate-scroll-y space-y-4">
                    {displayProducts.map((product, index) => (
                        <Card key={`${product.id}-${index}`} className="p-4 flex items-center gap-4 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-md border-white/20">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={80}
                                height={80}
                                className="rounded-lg object-cover"
                                data-ai-hint={product.hint}
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-foreground text-sm">{product.name}</h4>
                                <p className="text-muted-foreground text-xs">{product.category}</p>
                                <p className="text-foreground font-bold mt-1">{product.price}</p>
                            </div>
                            <Button size="icon" variant="ghost" className="h-9 w-9 shrink-0 rounded-full bg-primary/10 hover:bg-primary/20 text-primary">
                                <ShoppingCart className="h-4 w-4" />
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
          </div>

          <div className="w-full md:w-[65%] h-full">
             <Card className="h-full w-full flex flex-col p-6 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-lg border-white/20">
                <div className="flex-grow flex items-center justify-center">
                    <Image src="https://placehold.co/800x600.png" alt={featuredProduct.name} width={450} height={350} className="rounded-lg object-cover max-w-full h-auto" data-ai-hint={featuredProduct.hint}/>
                </div>
                <div className="flex-shrink-0 pt-6">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold font-headline text-foreground">{featuredProduct.name}</h3>
                        <p className="text-muted-foreground">{featuredProduct.description}</p>
                        <p className="text-3xl font-bold text-primary mt-2">{featuredProduct.price}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                        <ConfigOption icon={<MemoryStick/>} label="Memoria RAM" value="16GB" activeValue={activeConfig.ram} onClick={() => setActiveConfig({...activeConfig, ram: "16GB"})}/>
                        <ConfigOption icon={<Cpu/>} label="Procesador" value="M4 Pro" activeValue={activeConfig.cpu} onClick={() => setActiveConfig({...activeConfig, cpu: "M4 Pro"})}/>
                        <ConfigOption icon={<HardDrive/>} label="Almacenamiento" value="1TB SSD" activeValue={activeConfig.storage} onClick={() => setActiveConfig({...activeConfig, storage: "1TB SSD"})}/>
                    </div>
                    <Button size="lg" className="w-full">
                        <Sparkles className="mr-2 h-4 w-4"/> Comprar Ahora
                    </Button>
                </div>
            </Card>
          </div>
        </div>

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-card/80 backdrop-blur-xl border-l border-border/20 shadow-2xl transform transition-transform duration-700 ease-in-out",
            cartOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <h3 className="text-xl font-bold font-headline flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-primary" />
                Tu Carrito
              </h3>
              <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              <div className="flex gap-4">
                <Image
                  src={cartProduct.image}
                  alt={cartProduct.name}
                  width={90}
                  height={90}
                  className="rounded-lg object-cover"
                  data-ai-hint={cartProduct.hint}
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{cartProduct.name}</h4>
                  <p className="text-muted-foreground text-sm">{cartProduct.description}</p>
                  <p className="font-bold mt-1">{cartProduct.price}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 border rounded-md p-0.5">
                      <Button variant="ghost" size="icon" className="h-6 w-6"><Minus className="h-4 w-4" /></Button>
                      <span className="font-bold text-sm px-1">1</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><Plus className="h-4 w-4" /></Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
               <Badge variant="secondary" className="w-full justify-center py-1">¡Solo quedan 3 en stock!</Badge>
            </div>
            <div className="p-6 border-t border-border/20 mt-auto space-y-4">
                <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>{cartProduct.price}</span>
                </div>
                 <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Envío</span>
                    <span>Gratis</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-border/20 pt-4 mt-4">
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


function ConfigOption({ icon, label, value, activeValue, onClick }: { icon: React.ReactNode, label: string, value: string, activeValue: string, onClick: () => void }) {
    const isActive = value.split(" ")[0] === activeValue;
    return (
        <Button variant={isActive ? "default" : "outline"} className="flex flex-col h-auto py-3" onClick={onClick}>
            <div className="flex items-center gap-2 mb-1">
                {icon}
                <span className="font-semibold">{label}</span>
            </div>
            <span className="text-muted-foreground">{value}</span>
        </Button>
    )
}

    
