
import { Header } from '@/components/page/header';
import { Hero } from '@/components/page/hero';
import { RealEstate } from '@/components/page/real-estate';
import { Industrial } from '@/components/page/industrial';
import { Contact } from '@/components/page/contact';
import { Footer } from '@/components/page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container py-12 md:py-20">
          <div className="flex flex-col items-center gap-12 md:gap-20">
            <RealEstate />
            <Industrial />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
