
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
  return (
    <section id={id} className={cn("relative w-full py-20 md:py-32 overflow-hidden", className)}>
       {backgroundVideoUrl && (
         <>
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
            <div className="absolute inset-0 bg-black/60" />
         </>
      )}
      <div className="container relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <h2 className={cn(
              "text-3xl font-bold tracking-tighter sm:text-5xl font-headline",
              backgroundVideoUrl && "text-white"
          )}>
            {title}
          </h2>
          <p className={cn(
              "mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed mt-4",
              backgroundVideoUrl && "text-white/80"
          )}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
