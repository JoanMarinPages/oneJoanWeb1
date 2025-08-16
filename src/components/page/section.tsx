
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    title: React.ReactNode;
    description: string;
    children: React.ReactNode;
    className?: string;
    backgroundVideoUrl?: string;
}

export function Section({ id, title, description, children, className, backgroundVideoUrl }: SectionProps) {
  const textColorClass = backgroundVideoUrl ? "text-white" : "";
  const textShadowStyle = backgroundVideoUrl ? { textShadow: '0 2px 4px rgba(0,0,0,0.5)' } : {};

  return (
    <section id={id} className={cn("w-full py-12 md:py-16", className)}>
       <div className="container relative z-10 mx-auto w-full lg:w-3/5 overflow-hidden rounded-2xl shadow-2xl border">
          {backgroundVideoUrl && (
            <div className="absolute inset-0 z-0">
                <video
                    key={backgroundVideoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={backgroundVideoUrl} type="video/mp4" />
                </video>
            </div>
          )}
          <div className={cn("relative z-10", backgroundVideoUrl ? "bg-black/10" : "bg-card")}>
            <Card className="bg-transparent backdrop-blur-sm rounded-2xl p-8 md:p-12 border-0">
                <div className="text-center mb-12 fade-in-up" style={textShadowStyle}>
                  <h2 className={cn(
                      "text-3xl font-bold tracking-tighter sm:text-5xl font-headline",
                      textColorClass
                  )}>
                    {title}
                  </h2>
                  <p className={cn(
                      "mx-auto max-w-[800px] md:text-xl/relaxed mt-4",
                       backgroundVideoUrl ? "text-white/90" : "text-muted-foreground"
                  )}>
                    {description}
                  </p>
                </div>
                {children}
            </Card>
          </div>
      </div>
    </section>
  );
}
