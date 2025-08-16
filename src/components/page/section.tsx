
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    title: React.ReactNode;
    description: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <div className="container">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            {title}
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed mt-4">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
