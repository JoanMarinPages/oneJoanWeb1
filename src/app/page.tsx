import { Header } from '@/components/page/header';
import { Hero } from '@/components/page/hero';
import { RealEstate } from '@/components/page/real-estate';
import { Industrial } from '@/components/page/industrial';
import { Contact } from '@/components/page/contact';
import { Splatting } from '@/components/page/splatting';
import { Footer } from '@/components/page/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <RealEstate />
        <Splatting />
        <Industrial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
